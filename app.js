const express = require('express');
const connectDB = require("./db");
const internRoutes = require('./routes/internRoutes');
require('dotenv').config();
const { PORT } = process.env;


connectDB();

const app = express();

app.use(express.json());

app.use(internRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Zuri Training!' });
});

const port = process.env.PORT || 6080;

app.listen(port, () => {
    console.log(`App is up and running.`);
});
