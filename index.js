require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mothodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const MongoAtore = require('connect-mongo');

const connectDB = require('./server/config/database');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3025;

// Connect to database
connectDB();

// Middleware -> pass data through form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(mothodOverride('_method'));

app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoAtore.create({ mongoUrl: process.env.MONGODB_URI })
}));
app.use(express.static('public'));

//Template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 