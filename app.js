require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const lugarRouter = require('./src/routes/lugar.router');
const mongoConexion = config.get('database.host')
const app = express();

const mongoose = require('mongoose');
mongoose
  .connect(mongoConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoBD")) //esto se puede evitar, es solo para saber que se realizo la conexion
  .catch((err) => {
    console.error(err);
    throw err;
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', lugarRouter);

module.exports = app;
