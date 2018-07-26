const LocalStrategy = require('passport-local').Strategy;
const models = require('../../models');
const bcrypt = require('../bcrypt');

const localStrategyCallback = async (username, password, done) => {
  try {
    const user = await models.Users.findOne({ email: username });

    if (user) {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      return isCorrectPassword ? done(null, user.toObject()) : done(null, false);
    }

    return done(null, false);
  } catch (err) {
    return done(null, false);
  }
};

module.exports = (new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, localStrategyCallback));
