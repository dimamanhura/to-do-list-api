const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const routers = require('./routers');
const db = require('./models');
const PORT = 7676;
const app = express();

app.use(express.static(__dirname));
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer({ dest: 'uploads/' }).any());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

const router = routers();
app.use(router);

db.connect().then(() => {
  const server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listen port ${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
