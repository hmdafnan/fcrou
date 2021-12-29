const software = require('../shared/softwares');

const getSoftware = (req, res, next) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(software);

    } catch (error) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(error);
    }
}

const postSoftware = (req, res, next) => {
    
}

module.exports = {getSoftware};