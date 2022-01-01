const Products = require('../models/productsSchema');
const prepareResponse = require('../utils/prepareResponseObject');

const postProducts = async (req, res, next) => {
    const response = prepareResponse();
    try {
        console.log(req.body);
        const { name, image, price, tag, featured } = req.body;
        if (!name || !price || !featured) {
            next((err) => {
                return (new Error('Insufficient data for Products!!'));
            });
            return ;
        }
        try {
            const product = new Products({ name, image, price, tag, featured });
            await product.save();
        } catch (error) {
            response.status =500;
            response.body = error.message;
            res.status(500).json(response);
            return ;
        }
        response.status =200;
        response.body = "SUCCESS";
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const getProducts = async (req, res, next) => {
    const response = prepareResponse();
    try {
        // const prevData = JSON.parse(fs.readFileSync('./shared/contactUs.json', {encoding: 'utf-8'}));
        const products = await Products.find({}).sort({createdAt: -1});
        response.status =200;
        response.body = products;
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const deleteProducts = async (req, res, next) => {
    const response = prepareResponse();
    try {
        await Products.findByIdAndRemove(req.params.productId)
        response.status =200;
        response.body = "Deletion of Productss Success";
    }
    catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

module.exports = {postProducts, getProducts, deleteProducts};