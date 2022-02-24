const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.options('*', cors());

// Route Imports
const user = require('./routes/userRoute');
app.use('/api/v1', user);

// app.use(express.static(path.join(__dirname, "./game-task/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./game-task/build/index.html"));
//   });

module.exports = app;
