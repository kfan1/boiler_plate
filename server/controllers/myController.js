const myController = {};

myController.test = (req, res, next) => {
  console.log('Hello there!');
  return next();
};

module.exports = myController;
