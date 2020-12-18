const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Up and running 🚀🚀🚀🚀');
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

