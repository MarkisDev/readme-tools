
export default async (app) =>
{

    app.get('/status', (req, res) =>
    {
        res.status(200).end();
    });
    app.use(function (req, res, next)
    {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', `public, max-age=10`);
        next();
    })
    return app;
};