const models = require('../models');

module.exports = {
  addItem: async (req, res) => {
    try {
      const { title, completed } = req.body;
      const newItem = await models.Items.create({
        title, completed
      });

      res.json(newItem);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
  getItems: async (req, res) => {
    try {
      const items = await models.Items.find({});

      res.json(items);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
  updateItem: async (req, res) => {
    try {
      const { title, completed } = req.body;
      const updatedItem = await models.Items.findOneAndUpdate({ _id: req.params.id }, {
        $set: { title, completed }
      }, { new: true });

      res.json(updatedItem);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
  deleteItem: async (req, res) => {
    try {
      const removedItem = await models.Items.remove({ _id: req.params.id });

      res.json(removedItem);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
};
