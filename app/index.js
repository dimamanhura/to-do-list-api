const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const multer = require('multer');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const socketIO = require('socket.io');
const config = require('../config')(process.env.NODE_ENV);
const authStrategies = require('./services/passport');
const routers = require('./routers');
const db = require('./models');

const PORT = 7070;
const app = express();
const ctrls = require('./controllers/users');
const socketService = require('./services/sockets');

app.use(session({
  secret: config['session-secret'],
  store: new MongoStore({ url: config.database })
}));
app.use(passport.initialize());
app.use(passport.session());
// auth
passport.use(authStrategies.local);
passport.use(authStrategies.facebook);
passport.use(authStrategies.instagram);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(express.static(__dirname));
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer({ dest: 'uploads/' }).any());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

const router = routers();
app.use(router);

// Auth routes
app.post('/auth', passport.authenticate('local'), ctrls.authLocal);
app.delete('/auth', ctrls.logout);
app.get('/auth', ctrls.getAuth);
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook'), ctrls.authSocial);
app.get('/auth/instagram', passport.authenticate('instagram'));
app.get('/auth/instagram/callback', passport.authenticate('instagram'), ctrls.authSocial);

db.connect().then(() => {
  const server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listen port ${PORT}`);
  });

  const io = socketIO(server);
  io.on('connection', (socket) => {
    socket.on(socketService.ADD_ITEM, async (data) => {
      try {
        const newItem = await socketService.addItem(data);
        io.emit(socketService.ADD_ITEM_SUCCESSFULLY, newItem);
      }
      catch (err) {
        io.emit(socketService.ADD_ITEM_WITH_ERROR, err);
      }
    });
  });
}).catch((err) => {
  console.error(err);
});
