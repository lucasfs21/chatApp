import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PersonOutline } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { BaseSyntheticEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Box, CircularProgress, ListItemButton } from '@mui/material';
import {
    Container,
    Wrapper,
    ChatInfo,
    ChatInfoTitle,
    ChatContainer,
    ChatList,
    MessageContainer,
    MessageText,
    MessageUserInfo,
    Overflow,
    TextAreaContainer,
    Hour,
} from './styles';
import { IUsersConnected } from './interfaces';
import { Message } from '../../models/message.model';
import usePageTitle from '../../utils/page-title';

export default function Chat() {
    usePageTitle('Conversasion');

    const socket = useSelector((state: any) => state.socketChat);
    if (!socket) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    bgcolor: '#0F1924',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    const [totalUsers, setTotalUsers] = useState(0);
    const [users, setUsers] = useState<IUsersConnected['users'] | []>([]);
    const [messages, setMessages] = useState<Array<Message | undefined>>([]);
    const [message, setMessage] = useState<string>('');
    const [lastKey, setLastKey] = useState<number | undefined>(undefined);

    useEffect(() => {
        socket.on('get_users', (usersConnected: IUsersConnected) => {
            setTotalUsers(usersConnected.total);
            setUsers(usersConnected.users);
        });
        let messagesCopy: Array<Message | undefined> = JSON.parse(
            JSON.stringify(messages)
        );

        socket.on('receive_message', (msg: Message) => {
            messagesCopy.push(msg);
            setMessages(messagesCopy);
        });
    }, [socket, messages]);

    const handleMessage = (e: BaseSyntheticEvent) => {
        setMessage(e.target.value);
    };

    const handleSend = (e: KeyboardEvent) => {
        if (e.type === 'keyup' && e.which === lastKey)
            return setLastKey(undefined);

        if (lastKey === 17 && e.which === 13 && message.trim()) {
            socket.emit('message', message);
            setMessage('');
        }

        setLastKey(e.which);
    };

    return (
        <Container>
            <Wrapper>
                <ChatInfo>
                    <ChatInfoTitle>Users online: {totalUsers} </ChatInfoTitle>
                    <Overflow>
                        <List>
                            {users.map((user: string, index: number) => {
                                return (
                                    <ListItem disablePadding key={user + index}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PersonOutline />
                                            </ListItemIcon>
                                            <ListItemText primary={user} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Overflow>
                </ChatInfo>
                <ChatContainer>
                    <ChatList>
                        {messages.map(
                            (message: Message | undefined, index: number) => {
                                if (!message) return <></>;
                                return (
                                    <MessageContainer
                                        key={message.user + index}
                                    >
                                        <MessageUserInfo>
                                            <PersonOutline />
                                            <div>{message.user}</div>
                                        </MessageUserInfo>
                                        <MessageText
                                            ref={(ref: any) => {
                                                if (
                                                    ref &&
                                                    index ===
                                                        messages.length - 1
                                                ) {
                                                    ref.scrollIntoView();
                                                }
                                            }}
                                        >
                                            {message.text}
                                        </MessageText>
                                        <Hour>{message.time}</Hour>
                                    </MessageContainer>
                                );
                            }
                        )}
                    </ChatList>
                    <TextAreaContainer>
                        <textarea
                            onChange={handleMessage}
                            value={message}
                            onKeyDown={handleSend}
                            onKeyUp={handleSend}
                            placeholder="Press CTRL + ENTER to send"
                        ></textarea>
                    </TextAreaContainer>
                </ChatContainer>
            </Wrapper>
        </Container>
    );
}
