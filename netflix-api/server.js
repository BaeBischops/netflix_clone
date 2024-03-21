const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect();

app.listen(5000, console.log('sever is started!'))