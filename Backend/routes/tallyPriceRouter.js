const express = require('express');
const bodyParser = require('body-parser');

const {getTallyPrice, postTallyPrice, deleteTallyPrice} = require('../controller/tallyPricesController');

const tallyPriceRouter = express.Router();

tallyPriceRouter.use(bodyParser.json());

tallyPriceRouter.route('/')
.get(getTallyPrice)
.post(postTallyPrice);

tallyPriceRouter.route('/:tallyId')
.delete(deleteTallyPrice);

module.exports = tallyPriceRouter;