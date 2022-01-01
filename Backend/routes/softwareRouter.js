const express = require('express');
const bodyParser = require('body-parser');

const {getSoftware, postSoftware, deleteSoftware} = require('../controller/softwareController');

const softwareRouter = express.Router();

softwareRouter.use(bodyParser.json());

softwareRouter.route('/')
.get(getSoftware)
.post(postSoftware);

softwareRouter.route('/:softwareId')
.delete(deleteSoftware)

module.exports = softwareRouter;