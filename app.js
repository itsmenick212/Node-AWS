const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome!");
});

//const port = process.env.port || 8081;
var port = normalizePort(process.env.port || '8081');

app.listen(port, () => {
    console.log("What's up?");
});