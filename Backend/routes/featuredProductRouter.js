const express = require('express');
const bodyParser = require('body-parser');

const {getFeaturedProducts} = require('../controller/featuredProductController');

const featuredProductRouter = express.Router();

featuredProductRouter.use(bodyParser.json());

featuredProductRouter.route('/')
.get((req, res, next) => {
    getFeaturedProducts(req, res, next)
})
.post((req, res, next) => {
    res.end('Will add the products: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode =403
    res.end('PUT Operation not supported on /products');
})
.delete((req, res, next) => {
    res.end('Deleting all the products!');
});

featuredProductRouter.route('/:productId')
.get((req, res, next) => {
    res.end('Will send details of the product: ' + req.params.productId +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /product/'+ req.params.productId);
})
.put((req, res, next) => {
    res.write('Updating the product: ' + req.params.productId + '\n');
    res.end('Will update the product: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting product: ' + req.params.productId);
});

module.exports = featuredProductRouter;