const app = require('./app');

const port = 5000;
app.listen(port, () => {
    console.log(`App running on http://127.0.0.1:${port}`);
});