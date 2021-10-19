
export default async (app) =>
{

    app.get('/status', (req, res) =>
    {
        res.status(200).end();
    });
    return app;
};