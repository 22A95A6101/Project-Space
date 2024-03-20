const mongoose = require ('mongoose');
const emailSchema = new mongoose.Schema({
  name: String,
  email: String,
  website: String,
  changeType: String,
  description: String,
  attachment: {
    type:String,
    default:''
  },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now }
});
module.exports=mongoose.model('Email',emailSchema);