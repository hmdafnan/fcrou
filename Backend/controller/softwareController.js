const Software = require('../models/softwareSchema');
const prepareResponse = require('../utils/prepareResponseObject');

const postSoftware = async (req, res, next) => {
    const response = prepareResponse();
    try {
        console.log(req.body);
        const { name, link, image } = req.body;
        if (!name || !link || !image) {
            next((err) => {
                return (new Error('Insufficient data!!'));
            });
            return ;
        }
        try {
            const software = new Software({ name, link, image });
            await software.save();
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

const getSoftware = async (req, res, next) => {
    const response = prepareResponse();
    try {
        const softwares = await Software.find({}).sort({createdAt: -1});
        response.status =200;
        response.body = softwares;
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const deleteSoftware = async (req, res, next) => {
    const response = prepareResponse();
    try {
        await Software.findByIdAndRemove(req.params.softwareId)
        response.status =200;
        response.body = "Deletion Software Success";
    }
    catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

module.exports = {postSoftware, getSoftware, deleteSoftware};