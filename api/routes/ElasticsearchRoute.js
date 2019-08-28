module.exports = (app) => {
  const elastichController = require("../controllers/ElasticsearchController")

  // Routes
  app.route('/elastic')
    .get(elastichController.result)
}