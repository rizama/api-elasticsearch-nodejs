const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"]
  },
  nip: {
    type: String,
    unique: true,
    required: [true, "Please provide your nip"]
  },
  alamat: {
    type: String,
    required: [true, "Please provide your alamat"]
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)