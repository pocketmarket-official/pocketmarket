const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://pocketmarket-prod.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/',
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
