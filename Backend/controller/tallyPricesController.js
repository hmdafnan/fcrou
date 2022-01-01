const Tally = require('../models/tallySchema');
const prepareResponse = require('../utils/prepareResponseObject');

const postTallyPrice = async (req, res, next) => {
    const response = prepareResponse();
    try {
        console.log(req.body);
        const { name, price, description, image } = req.body;
        if (!name || !price || !image) {
            next((err) => {
                return (new Error('Insufficient data!!'));
            });
            return ;
        }
        try {
            const tally = new Tally({ name, price, description, image });
            await tally.save();
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

const getTallyPrice = async (req, res, next) => {
    const response = prepareResponse();
    try {
        const tally = await Tally.find({}).sort({createdAt: -1});
        response.status =200;
        response.body = tally;
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const deleteTallyPrice = async (req, res, next) => {
    const response = prepareResponse();
    try {
        await Tally.findByIdAndRemove(req.params.tallyId)
        response.status =200;
        response.body = "Deletion Tally Price Success";
    }
    catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

module.exports = {postTallyPrice, getTallyPrice, deleteTallyPrice};