const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

// set up morgan middleware
app.use(morgan('dev'));

// middleware to handle json data
app.use(express.json());

// Express Router paths
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

// set up express to serve files from the public folder
app.use(express.static(__dirname + '/public'));

// set up request and response of express server
app.use((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

// create an instance of the http express server and listen
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});