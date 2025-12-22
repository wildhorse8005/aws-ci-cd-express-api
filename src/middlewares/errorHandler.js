module.exports = (err, req, res, _next) => {
  const status = err.statusCode || 500;

  // In production, avoid leaking stack traces
  res.status(status).json({
    message: err.message || 'Internal Server Error',
  });
};
