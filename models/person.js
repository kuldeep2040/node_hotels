const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  age:{
    type: Number,
    required : true
  },
  work:{
    type: String,
    enum : ["chef", "manager", "owner" ]
  },
  mobile:{
    type: String,
    required : true
  },
  email:{
    required: true,
    type: String,
    unique: true
  },
  address:{
    required: true,
    type: String,
  },
  salary:{
    required: true,
    type: String,
  }
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person;