const FacebookStrategy = require('passport-facebook').Strategy;
const models = require('../../models');
const config = require('../../../config')(process.env.NODE_ENV);

const facebookStrategyCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const { _json: { name, email, picture: { data: { url } } } } = profile;
    let user = await models.Users.findOne({ email });

    if (!user) {
      user = await models.Users.create({
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1],
        avatar: url
      });
    }

    if (user) {
      return done(null, user.toObject());
    }

    return done(null, false);
  } catch (err) {
    return done(null, false);
  }
};

module.exports = (new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:7070/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'photos']
}, facebookStrategyCallback));

