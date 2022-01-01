const express = require('express');
const bodyParser = require('body-parser');

const {postProducts, getProducts, deleteProducts} = require('../controller/productController');

const featuredProductRouter = express.Router();

featuredProductRouter.use(bodyParser.json());

featuredProductRouter.route('/')
.get(getProducts)
.post(postProducts);

featuredProductRouter.route('/:productId')
.delete(deleteProducts)

module.exports = featuredProductRouter;