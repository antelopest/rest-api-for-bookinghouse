'use strict'
const Routes = require('../api/routes/index');

function connectRoutes(app) {
  app.use('/users', Routes.UserRoutes);
}

module.exports = connectRoutes;