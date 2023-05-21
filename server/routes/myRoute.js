const express = require('express');
const myRouter = express.Router();
const myController = require('../controllers/myController');

myRouter.use('/', myController.test, (req, res) => {
  res.status(200).send('Hello world!');
});

module.exports = myRouter;
