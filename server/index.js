const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const logger = require('morgan');
const app = express();
app.use(cors());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app now running on port ${port}`);
})