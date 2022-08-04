// Requires
const express = require('express');
const config = require('config')
const mongoose = require('mongoose')

// Routers
const indexRouter = require('./src/routes/index');
const BirdWatchingRouter = require('./src/routes/birdWatching');

const dbConnectionString = config.get("database.host")

const app = express();

// Mongoose connection to MongoDB
mongoose
    .connect(dbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MONGO"))
    .catch((err) => { throw err })

// Express configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routers
app.use('/', indexRouter);
app.use('/BirdWatching', BirdWatchingRouter)

module.exports = app;
