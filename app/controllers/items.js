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
      res.json({ errors: [err] });
    }
  },
  getItems: async (req, res) => {
    try {
      const items = await models.Items.find({});

      res.json(items);
    } catch (err) {
      res.json({ errors: [err] });
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
      res.json({ errors: [err] });
    }
  },
  deleteItem: async (req, res) => {
    try {
      const removedItem = await models.Items.remove({ _id: req.params.id });

      res.json(removedItem);
    } catch (err) {
      res.json({ errors: [err] });
    }
  },
};
