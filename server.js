import express from 'express';

const PORT = 8080;
const HOST = 'localhost';

const app = express();

app.get('/api', (req, res) => {
    res.send('Express + Typescript');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});