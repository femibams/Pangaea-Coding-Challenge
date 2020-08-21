const express = require('express')
const route = require('./route')
const bodyParser = require('body-parser');
const app = express()
const port = 8000

// Parse incoming requests data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup Routing
route.setup(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})