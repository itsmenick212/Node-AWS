
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Welcome!");
});

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`));
});