const Employee = require('../models/employeeSchema');
const prepareResponse = require('../utils/prepareResponseObject');

const postEmployee = async (req, res, next) => {
    const response = prepareResponse();
    try {
        console.log(req.body);
        const { name, profession, image, contact } = req.body;
        if (!name || !image || !profession || !contact) {
            next((err) => {
                return (new Error('Insufficient data!!', err));
            });
            return ;
        }
        try {
            const employee = new Employee({ name, profession, image, contact });
            await employee.save();
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

const getEmployee = async (req, res, next) => {
    const response = prepareResponse();
    try {
        const employee = await Employee.find({}).sort({createdAt: -1});
        response.status =200;
        response.body = employee;
    } catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

const deleteEmployee = async (req, res, next) => {
    const response = prepareResponse();
    try {
        await Employee.findByIdAndRemove(req.params.employeeId)
        response.status =200;
        response.body = "Deletion of Employee Success";
    }
    catch (error) {
        response.status = 401
        response.body = error.message;
    }
    res.json(response);
}

module.exports = {postEmployee, getEmployee, deleteEmployee};