import * as express from 'express';
const PORT_NUMBER: Number = 3000;
const app: express.Application = express();
const router = express.Router();
app.use('/', router);
router.get('/:word', function (req, res) {
    res.send(`Word: ${req.params.word}`);
});
app.listen(PORT_NUMBER, function () {
    console.log(`App is now listening on port ${PORT_NUMBER}`);
});