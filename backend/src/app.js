const express = require('express');
const app = express();
const signupRoute = require('./Routes/SignupRoute')
const loginRoute = require('./Routes/LoginRoute')
const todoRoute = require('./Routes/ToDoRoute')
const cors = require('cors');

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.json());
app.use('/user/signup',signupRoute)
app.use('/user/login',loginRoute)
app.use('/todo',todoRoute)

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;