const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

// set up morgan middleware
app.use(morgan('dev'));

// middleware to handle json data
app.use(express.json());

app.use('/campsites', campsiteRouter);

// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
// })

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// })

// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
// })

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// })

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