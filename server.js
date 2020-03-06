const express = require('express');
const connectDb = require('./config/db')
const dotENV = require('dotenv');
const app = express();
const authRouter = require("./routs/authRouth")
app.use(express.json());
//setting environmental variables
dotENV.config({
    path: './config/config.env'
});
//connecting to db
connectDb()
    //mounting routs
app.use('/api/v1/auth', authRouter)


app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server s connected to port ${process.env.PORT}`);
});