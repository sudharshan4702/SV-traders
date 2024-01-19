const Employee = require("../models/employee");

const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(201).json({
      employees: employees,
    });
  } catch (e) {
    res.status(401).json({
      error: e,
    });
  }
};

const getEmployeeById = async (req, res) => {
  const _id = req.params.id;

  try {
    const employee = await Employee.findOne({ _id });

    res.status(201).json({
      employee: employee,
    });
  } catch (error) {
    res.status(400).json({
      e: error,
    });
  }
};

const addEmployee = async (req, res) => {
  const employeeName = req.body.employeeName;
  const employeephoneNumber = req.body.employeephoneNumber;
  const employeeJoiningDate = req.body.employeeJoiningDate;
  const employeeSalary = req.body.employeeSalary;

  try {
    const employee = await Employee.create({
      employeeName,
      employeeJoiningDate,
      employeephoneNumber,
      employeeSalary,
    });

    res.status(201).json({
      employee: employee,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const deleteEmployee = async (req, res) => {
  const _id = req.params.id;

  try {
    await Employee.findByIdAndDelete(_id);

    res.status(201).json({
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      e: error,
    });
  }
};

const updateEmployee = async (req, res) => {
  const _id = req.params.id;
  const employeeName = req.body.employeeName;
  const employeephoneNumber = req.body.employeephoneNumber;
  const leaveTaken = req.body.leaveTaken;
  const employeeJoiningDate = req.body.employeeJoiningDate;
  const employeeSalary = req.body.employeeSalary;

  try {
    const employee = await Employee.findByIdAndUpdate(
      { _id },
      {
        employeeName,
        employeeJoiningDate,
        leaveTaken,
        employeephoneNumber,
        employeeSalary,
      }
    );

    res.status(201).json({
      employee: employee,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
