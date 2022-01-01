const express = require('express');
const bodyParser = require('body-parser');

const { getEmployee, postEmployee, deleteEmployee } = require('../controller/employeeController');

const employeesRouter = express.Router();

employeesRouter.use(bodyParser.json());

employeesRouter.route('/')
.get(getEmployee)
.post(postEmployee);

employeesRouter.route('/:employeeId')
.delete(deleteEmployee)

module.exports = employeesRouter;