/* global __dirname */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const Promise = require("bluebird");
const elasticsearch = require("elasticsearch");
const argv = require("minimist")(process.argv.slice(2));
const PORT = argv.port || 4445;

exports.result = async (req, res) => {
  app.set("json spaces", 4);
  app.set(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  const ES_PORT = "http://localhost:9200/";
  const ESClient = new elasticsearch.Client({
    hosts: [ES_PORT]
  });
  const ES_QUERY = async () => {
    return new Promise(async (resolve, reject) => {
      ESClient.search(
        {
          index: "products",
          body: {
            query: {
              range: {
                created: {
                  gte: "01-01-2017",
                  lte: "01-01-2018",
                  format: "dd-MM-yyy"
                }
              }
            }
          }
        },
        (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send(result);
        }
      );
    });
  };
  ES_QUERY();
};
