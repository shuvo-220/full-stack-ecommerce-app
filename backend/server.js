const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({});
require('./db/db');
const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', user);
app.use('/api/v1', product);
app.use('/api/v1', order);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
})