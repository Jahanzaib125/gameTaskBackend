const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.options('*', cors());

// Route Imports
const user = require('./routes/userRoute');
app.use('/api/v1', user);
module.exports = app;
