module.exports = (app) => {
  const employee_controller = require('../controllers/EmployeeController')

  // Routes
  app.route('/employees')
    .get(employee_controller.all_employee)
    .post(employee_controller.create_employee)

  app.route('/employees/:employeeId')
    .get(employee_controller.read_employee)
    .put(employee_controller.update_employee)
    .delete(employee_controller.delete_employee)
}