const InstagramStrategy = require('passport-instagram').Strategy;
const models = require('../../models');
const config = require('../../../config')(process.env.NODE_ENV);


const instagramStrategyCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const { _json: { data: { username, profile_picture, full_name } } } = profile;
    let user = await models.Users.findOne({ email: username });

    if (!user) {
      user = await models.Users.create({
        email: username,
        first_name: full_name,
        last_name: full_name,
        avatar: profile_picture
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

module.exports = (new InstagramStrategy({
  clientID: config.instagram.clientID,
  clientSecret: config.instagram.clientSecret,
  callbackURL: 'http://localhost:7070/auth/instagram/callback'
}, instagramStrategyCallback));
