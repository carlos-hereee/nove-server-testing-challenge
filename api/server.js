const express = require('express');

const usersRouter = require('../routes/users-router');
const server = express();

server.use(express.json());

server.use('/api/users', usersRouter);

//testing server
server.get('/', (req, res) => {
    res.status(200).json({ api: 'its live'})
})

module.exports = server;