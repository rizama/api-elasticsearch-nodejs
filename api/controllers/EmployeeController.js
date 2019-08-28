const mongoose = require('mongoose'),
  Employee = mongoose.model('Employee');
// const Employee = require('../models/Employee')

exports.all_employee = async (req, res) => {
  const employees = await Employee.find({}, (error, employee) => {
    if (error)
      res.send(error);
    res.json(employee);
  })

  // Employee.find({}, function (err, employee) {
  //   if (err)
  //     res.send(err);
  //   res.json(employee);
  // });
};

exports.create_employee = (req, res) => {
  const new_employee = new Employee(req.body)
  new_employee.save((error, employee) => {
    if (error) {
      res.send(error)
    }
    res.json(employee)
  })
};

exports.read_employee = async (req, res) => {
  const employee_detail = await Employee.findById(
    req.params.employeeId, (error, employee) => {
      if (error) {
        res.send(error)
      }
      res.json(employee)
    })
};

exports.update_employee = (req, res) => {
  Employee.findByIdAndUpdate({
    _id: req.params.employeeId
  }, req.body, {
    new: true
  }, (error, employee) => {
    if (error) {
      res.send(error)
    }
    res.json(employee)
  })
};

exports.delete_employee = (req, res) => {
  Employee.remove({
    _id: req.params.employeeId
  }, (error, employee) => {
    if (error) {
      res.send(error)
    }
    res.json({
      message: 'Employee successfully deleted'
    })
  })
};