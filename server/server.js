const express = require('express');
const connectDB = require('./database/db');

connectDB();

const routes = require('./routes/routes');

const app = express();

app.use(express.json());


app.use('/sliceanddice/', routes);

const PORT = 5000;

app.listen(
    PORT, 
    console.log(`Server is running on port ${PORT}`) 
);