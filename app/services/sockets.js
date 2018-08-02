const models = require('../models');

module.exports = {
  // ON const
  ADD_ITEM: 'ADD_ITEM',
  // emit const
  ADD_ITEM_SUCCESSFULLY: 'ADD_ITEM_SUCCESSFULLY',
  ADD_ITEM_WITH_ERROR: 'ADD_ITEM_WITH_ERROR',
  addItem: async (data) => {
    const { title, completed, author } = data;

    const newItem = await models.Items.create({
      title, completed, author
    });

    return newItem;
  }
};

