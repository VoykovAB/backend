const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/development');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({origin: 'http://localhost:4200', credentials: true}));

mongoose.connect('mongodb://localhost:27017/test');
require("./models/User");
app.use(bodyParser.json());
app.use(require("./routes/users"));
const server = http.createServer(app).listen(config.http.port);







console.log('Starting the server...');
