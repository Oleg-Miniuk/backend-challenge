const menuRoute = require('../routes/menu/menuRoute');

const initRoutes = app => {
  app.use('/menu', menuRoute);
};

module.exports = initRoutes;
