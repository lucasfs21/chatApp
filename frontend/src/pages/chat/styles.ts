import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: #e7e7e7;
        border: 1px solid #cacaca;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: #363636;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 24px;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    -ms-flex-wrap: wrap;
    background-color: rgb(244, 245, 251);
    border-radius: 16px;
`;

export const Overflow = styled.div`
    overflow: auto;
`;

export const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border-right: 1px solid #e6ecf3;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
`;

export const ChatInfoTitle = styled.div`
    display: flex;
    padding: 0.75rem 1rem;
    font-weight: 700;
    line-height: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
    line-break: anywhere;
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    :hover {
        background-color: #ffffff;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 1rem;
    border-bottom: 1px solid #f0f4f8;
    align-items: center;
    font-weight: 600;
    font-size: 0.85rem;
`;

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    he
    padding: 1rem 0;
    border-right: 1px solid #C1C1CA;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);

`;

export const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    gap: 24px;
    height: 90%;
    overflow: auto;
`;

export const TextAreaContainer = styled.div`
    display: flex;
    height: 10%;
    padding: 24px;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
    textarea {
        width: 100%;
        height: 100%;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 16px;
        resize: none;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;

export const MessageUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MessageText = styled.div`
    padding: 0.4rem 1rem;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);

    background: #ffffff;
    font-weight: 300;
    line-height: 150%;
    line-break: anywhere;
    :before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 10px;
        left: -20px;
        border: 10px solid;
        border-color: transparent #ffffff transparent transparent;
    }
`;

export const Hour = styled.div`
    font-size: .75rem;
`
