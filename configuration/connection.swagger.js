'use strict'

const config = require('config');

function connectSwagger(app) {
  const expressSwagger = require('express-swagger-generator')(app);
  
  const swaggerSettings = {
    swaggerDefinition: {
      info: {
        title: 'Service Authentication',
        version: '1.0.0',
        description: 'Authentication service for Booking house. Token JWT. Strategy Google, Facebook, Local'
      },
      host: `${config.get('host')}:${config.get('port')}`,
      produces: [
        "application/json",
        //"application/xml",
      ],
      schemes: ['http'], // 'https'
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: "",
        }
      }
    },
    basedir: __dirname,
    files: ['../api/components/users/routes/user.routes.js', '../api/components/users/model/user.model.js']
  };

  expressSwagger(swaggerSettings);
}
module.exports = connectSwagger;