const express = require('express');
const bodyParser = require('body-parser');

const softwareRouter = express.Router();

softwareRouter.use(bodyParser.json());

softwareRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the softwares to you!');
})
.post((req, res, next) => {
    res.end('Will add the software: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode =403
    res.end('PUT Operation not supported on /softwares');
})
.delete((req, res, next) => {
    res.end('Deleting all the softwares!');
});

softwareRouter.route('/:softwareId')
.get((req, res, next) => {
    res.end('Will send details of the software: ' + req.params.softwareId +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /software/'+ req.params.softwareId);
})
.put((req, res, next) => {
    res.write('Updating the software: ' + req.params.softwareId + '\n');
    res.end('Will update the software: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting software: ' + req.params.softwareId);
});

module.exports = softwareRouter;