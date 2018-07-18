const express = require('express');

const Routers = {
  // items
  'items POST': 'addItem',
  'items GET': 'getItems',
  'items/:id GET': 'getItemById',
  'items/:id POST': 'updateItem',
  'items/:id DELETE': 'deleteItem'
};

module.exports = () => {
  const router = express.Router();

  Object.keys(Routers).forEach((key) => {
    const handleFunc = require(`./controllers/${key.split(/\/| /)[0]}`)[Routers[key]];
    const url = key.split(' ')[0];
    const method = key.split(' ')[1];

    router[method.toLowerCase()](`/${url}`, handleFunc);
  });

  return router;
};
