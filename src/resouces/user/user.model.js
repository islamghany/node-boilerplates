const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    status: ["admin", "student", "content_creator"],
    default:"student"
  },
  resetPasswordLink:{
     type:String,
     default:'' 
  },
}, {timestamps: true}));
module.exports = User;