require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const connect_db = require('./server/config/database');

const app = express();
const PORT = process.env.PORT || 3000;

connect_db();

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});