const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: 'http://localhost:8080' },
});

const PORT = 3001;
let usersConnected = {
    users: [],
    total: 0,
};

io.on('connection', (socket) => {
    usersConnected.total = usersConnected.total + 1;

    socket.on('disconnect', () => {
        usersConnected.total = usersConnected.total - 1;
        let index = usersConnected.users.indexOf(socket.data.user);
        usersConnected.users.splice(index, 1);
        usersConnected.users = usersConnected.users;
        io.emit('get_users', usersConnected);
    });

    socket.on('set_user', (user) => {
        socket.data.user = user;
        usersConnected.users.push(user);

        io.emit('get_users', usersConnected);
    });

    socket.on('message', (text) => {
        let newDate = new Date();
        io.emit('receive_message', {
            text,
            user: socket.data.user,
            time: `${newDate.getHours()}:${
                newDate.getMinutes()
            }`,
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
});
