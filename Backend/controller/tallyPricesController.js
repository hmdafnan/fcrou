const tally = require('../shared/tallyPrices');

const getTallyPrice = (req, res, next) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(tally);

    } catch (error) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(error);
    }
}

module.exports = {getTallyPrice};