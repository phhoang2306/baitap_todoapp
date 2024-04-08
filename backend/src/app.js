const config = require('./config/config')
const helmet = require('helmet'); // Prevent middleware
const xss = require('xss-clean'); // Prevent Cross-Site Scripting
const mongoSanitize = require('express-mongo-sanitize'); // Against NoSQL Injection attacks
const compression = require('compression'); // reduce a size of data sent to client
const cors = require('cors'); // Prevent connect from out side
const httpStatus = require('http-status'); // Return of HTTP Status
const express = require('express');

// Setup app
const app = express();

// Set security HTTP headers
app.use(helmet());

// Parse Json request body 
app.use(express.json()); 

//Parse urlencoded request body
app.use(express.urlencoded({ extended: true })); 

// Sanitize request data
app.use(xss());
app.use(mongoSanitize()); 

// Gzip compression
app.use(compression()); 

// Enable cors 
app.use(cors()); 
app.options('*', cors());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Send back 404 error for any unknown API request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;