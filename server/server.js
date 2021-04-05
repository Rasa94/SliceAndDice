const express = require('express');
const path = require('path');
const connectDB = require('./database/db');

connectDB();

const routes = require('./routes/routes');

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

const aa = path.join(__dirname, '..', 'public', 'public', 'index.html');
console.log(aa)


app.use('/sliceanddice/', routes);

const PORT = 5000;

app.listen(
    PORT, 
    console.log(`Server is running on port ${PORT}`) 
);  