const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");

module.exports.connect = () => {
  const mongoUri = "mongodb://localhost/todo-db";
  const mongoDB = mongoose.connect(mongoUri);

  fs
    .readdirSync('./app/models')
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
      module.exports[file.split('.')[0]] = require(`./${file}`);
    });

  return mongoDB
};