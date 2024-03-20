//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Developer = mongoose.model('Developer', developerSchema);

//export default Developer;
module.exports=Developer;