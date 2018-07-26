const models = require('../models');

module.exports = {
  getUserById: async (id) => {
    const user = await models.Users.findById(id);

    return user.toObject();
  }
};
