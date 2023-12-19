// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Assuming your routes file is in the same directory

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use the routes defined in the routes.js file
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
