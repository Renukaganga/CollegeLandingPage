

import mongoose, { Schema,models} from 'mongoose';

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phonenumber :{
    type:String,
    required:true
  }, address:{
    type:String,
    required:true
  }, course:{
    type:String,
    required:true
  }
},
{timestamps:true}
)

const User = models.User ||  mongoose.model("User",userSchema);
export default User;
