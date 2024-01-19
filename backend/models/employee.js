const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeephoneNumber: {
    type: Number,
    required: true,
  },

  leaveTaken: {
    type: Number,
    default: 0,
  },

  employeeJoiningDate: {
    type: String,
    required: true,
  },
  employeeSalary: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("employee", employeeSchema);

function resetEmployeeLeaves() {
  Employee.updateMany({}, { leaveTaken: 0 }, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Reset ${res.nModified} employee leaves to 0`);
    }
  });
}

setInterval(() => {
  const now = new Date();
  if (now.getDate() === 1) {
    resetEmployeeLeaves();
  }
}, 24 * 60 * 60 * 1000);

module.exports = Employee;
