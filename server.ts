import express, { Express, Request, Response } from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});