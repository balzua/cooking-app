import express = require('express');
const PORT_NUMBER: Number = 3000;
const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT_NUMBER, function () {
    console.log(`App is now listening on port ${PORT_NUMBER}`);
})