const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/', // Change '/api' to match your API endpoint
        createProxyMiddleware({
            target: 'https://dashboard-blog-backend.onrender.com', // Replace with your API server URL
            changeOrigin: true,
        }),
    );
};
