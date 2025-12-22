const express = require('express');
const routes = require('./src/routes');
const notFound = require('./src/middlewares/notFound');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());

/**
 * SWAGGER
 * Switch Swagger on only in non-production environments
 */
if (process.env.NODE_ENV !== 'production') {
  const swaggerUi = require('swagger-ui-express');
  const swaggerSpec = require('./src/docs/swagger');

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

// API routes
app.use('/api', routes);

// 404 + error handler (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
