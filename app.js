const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/Connection');

const app = express();
connectDB();

app.use(express.json({extended: false}));

const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);

app.listen(9000, () => {
    console.log('Server Started');
})