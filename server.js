const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

// set up express server
app.use((req, res) => {
    console.log(req.headers);
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

// create an instance of the http express server and listen
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});