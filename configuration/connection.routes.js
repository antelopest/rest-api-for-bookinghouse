'use strict'
const userComponent = require('../api/components/users/index');

const userRoutes = userComponent.userRoutes;

function connectRoutes(app) {
  app.use('/users', userRoutes);
}

module.exports = connectRoutes;