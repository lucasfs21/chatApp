import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import { CustomizedBox } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setSocketChat } from '../../redux/slices/mainSlice';
import usePageTitle from '../../utils/page-title';
const { io } = require('socket.io-client');

export default function JoinPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    usePageTitle('Home');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let name = new FormData(event.currentTarget).get('name');
        name = String(name);

        if (!name.trim()) return; // The following lines of the code below will be ignored when the condition is met

        const socket = await io.connect(process.env.REACT_APP_SOCKET_API_URL);
        socket.emit('set_user', name);
        dispatch(setSocketChat(socket));
        navigate('/chat');
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <CustomizedBox>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Who are you?
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Chat
                    </Button>
                </Box>
            </CustomizedBox>
        </Container>
    );
}
