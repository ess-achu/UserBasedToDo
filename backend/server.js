require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app')


const port = process.env.PORT
app.listen(port,() =>{
    console.log(`Server started in port: ${port}`);
})