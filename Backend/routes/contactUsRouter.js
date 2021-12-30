const express = require('express');
const bodyParser = require('body-parser');

const {postContactUs, getContactUs, deleteContactUs} = require('../controller/contactUsController');

const contactUsRouter = express.Router();

contactUsRouter.use(bodyParser.json());

contactUsRouter.route('/')
.get(getContactUs)
.post(postContactUs);

contactUsRouter.route('/:contactId')
.delete(deleteContactUs)

module.exports = contactUsRouter;