const express = require('express');
const bodyParser = require('body-parser');

const {getTallyPrice} = require('../controller/tallyPricesController');

const tallyPriceRouter = express.Router();

tallyPriceRouter.use(bodyParser.json());

tallyPriceRouter.route('/')
.get((req, res, next) => {
    getTallyPrice(req, res, next)
})

module.exports = tallyPriceRouter;