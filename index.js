require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Employee = require('./api/models/Employee')

const app = new express()

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// * Connect to Mongodb
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true
})
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const routes = require('./api/routes/EmployeeRoute'); //importing route
routes(app); //register the route

const routesElastic = require('./api/routes/ElasticsearchRoute'); //importing route
routesElastic(app);

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

// * Server Run
app.listen(process.env.PORT, () => {
  console.log(`'App Listening on port ${process.env.PORT}'`)
})