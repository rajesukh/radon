const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:  string ,
  lastName: String,
  mobile: {
      type : string,
      unique: true,
      required : true,
      emailId : string,
      age: Number,
      gender : 
            type:  string,
            enum: ["male", "female", "LGBT"]
  }  
 
},{timestamps : true} );

module.exports = mongoose.model('user', userSchema)
