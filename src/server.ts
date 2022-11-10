import express from 'express';

const PORT = 8080;
const HOST = 'localhost';

const app = express();

app.get('/api', (req: Request, res) => {
    res.send();
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});