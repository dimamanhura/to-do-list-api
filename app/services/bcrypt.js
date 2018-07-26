const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  hash: password => bcrypt.hash(password, saltRounds),
  compare: (userPlainTextPassword, hashPassword) => (
    bcrypt.compare(userPlainTextPassword, hashPassword)
  )
};
