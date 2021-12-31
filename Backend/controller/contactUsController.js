const fs = require('fs');
const Contact = require('../models/contactUsSchema');
const prepareResponse = require('../utils/prepareResponseObject');

const postContactUs = async (req, res, next) => {
    const response = prepareResponse();
    try {
        console.log(req.body);
        const { name, email, phno, message } = req.body;
        if (!name || !email || !phno || !message) {
            next((err) => {
                return (new Error('Insufficient data!!'));
            });
            return ;
        }
        try {
            const contact = new Contact({ name, email, phno, message });
            await contact.save();
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

const getContactUs = async (req, res, next) => {
    const response = prepareResponse();
    try {
        // const prevData = JSON.parse(fs.readFileSync('./shared/contactUs.json', {encoding: 'utf-8'}));
        const contacts = await Contact.find({}).sort({createdAt: -1});
        response.status =200;
        response.body = contacts;
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const deleteContactUs = async (req, res, next) => {
    const response = prepareResponse();
    try {
        await Contact.findByIdAndRemove(req.params.contactId)
        response.status =200;
        response.body = "Deletion Success";
    }
    catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

module.exports = {postContactUs, getContactUs, deleteContactUs};