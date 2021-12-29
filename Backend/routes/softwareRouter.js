const express = require('express');
const bodyParser = require('body-parser');

const {getSoftware} = require('../controller/softwareController');

const softwareRouter = express.Router();

softwareRouter.use(bodyParser.json());

softwareRouter.route('/')
.get((req, res, next) => {
    getSoftware(req, res, next)
})

module.exports = softwareRouter;