const models = require('../models');
const bcrypt = require('../services/bcrypt');
const config = require('../../config')(process.env.NODE_ENV);
const JWT = require('../services/jwt');
const userService = require('../services/users');

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { avatar, first_name, email, password, last_name } = req.body;

      // Hash password
      const newPassword = await bcrypt.hash(password);

      // Create user but not activate
      await models.Users.create({
        avatar,
        first_name,
        last_name,
        email,
        password: newPassword
      });

      res.json({ ok: true });
    } catch (err) {
      res.status(400).json(err.message || err);
    }
  },
  authLocal: async (req, res) => {
    try {
      console.log('------------------------------------');
      console.log(req.user);
      console.log('------------------------------------');
      const token = await JWT.createTokens(req.user);

      console.log('------------------------------------');
      console.log(token);
      console.log('------------------------------------');

      res.json(Object.assign({}, req.user, { token }));
    } catch (err) {
      res.status(400).json(err.message || err);
    }
  },
  authSocial: async (req, res) => {
    try {
      const { token } = await JWT.createTokens(req.user);

      res.redirect(`${config['website-url']}/?isSocialAuth=true&token=${token}&type=0`);
    } catch (err) {
      res.status(400).json(err.message || err);
    }
  },
  logout: async (req, res) => {
    try {
      req.logout();

      res.json({ ok: true });
    } catch (err) {
      res.status(400).json(err.message || err);
    }
  },
  getAuth: async (req, res) => {
    try {
      const token = req.body.token || req.query.token || req.headers['x-access-token'];

      if (token) {
        const decoded = await JWT.verifyToken(token);
        const user = await userService.getUserById(decoded._id);

        res.json(Object.assign({}, user, { token: decoded.token }));
      }

      res.json({ user: false });
    } catch (err) {
      res.status(400).json(err.message || err);
    }
  }
};
