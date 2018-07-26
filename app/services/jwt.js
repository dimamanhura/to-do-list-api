const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'TOKEN_SECRET';

module.exports = {
  createTokens: async (data) => {
    const token = jwt.sign(data, TOKEN_SECRET, {});

    return token;
  },
  verifyToken: async (token) => {
    try {
      const decoded = jwt.verify(token, TOKEN_SECRET);

      return Object.assign({}, decoded, { token });
    } catch (err) {
      throw new Error('Нет прав, пользователь не активирован');
    }
  }
};
