const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.124.90.138:8000/',
      changeOrigin: true,
    })
  );
  app.use(
    '/trade',
    createProxyMiddleware({
      target: 'http://localhost:8000/',
      changeOrigin: true,
    })
  );
};
