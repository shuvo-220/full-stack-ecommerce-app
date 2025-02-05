const express = require('express');
const dotenv = require('dotenv');
dotenv.config({});
require('./db/db');
const user = require('./routes/userRoute');
const app = express();

app.use(express.json());
app.use('/api/v1', user);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
})