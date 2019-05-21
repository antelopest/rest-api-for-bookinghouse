'use strict'

const config = require('config');

async function connectSwagger(app) {
  const expressSwagger = require('express-swagger-generator')(app);
  
  const swaggerSettings = {
    swaggerDefinition: {
      info: {
        title: 'REST API Service',
        version: '1.0.0',
        description: 'REST API Service for Booking house'
      },
      host: `http://${config.get('host')}:${config.get('port')}`,
      produces: [
        "application/json",
        "application/xml",
      ],
      schemes: ['http', 'https'],
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
    files: ['./routes.js']
  };

  expressSwagger(swaggerSettings);
}
module.exports = connectSwagger;