const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample Express API',
      version: '1.0.0',
      description: 'API documentation using Swagger (OpenAPI 3.0)'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ]
  },

  // swagger-jsdoc will scan these files for JSDoc @openapi blocks
  apis: ['./src/routes/*.js', './app.js']
});

module.exports = swaggerSpec;
