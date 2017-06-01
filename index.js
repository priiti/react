const express = require('express');
const app = express();

app.set('port', (process.env.port || 5000));

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(app.get('port'), () => {
    console.log(`Server running on ${app.get('port')}`);
});