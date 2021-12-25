const products = require('../shared/products');

const getFeaturedProducts = (req, res, next) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(products);

    } catch (error) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(error);
    }
}

module.exports = {getFeaturedProducts}