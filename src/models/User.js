// const {Schema,model}=require('mongoose');
import { Schema, model } from 'mongoose';
// const bcrypt= require('bcryptjs')
import bcrypt from 'bcryptjs';
const UserSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},{timestamps:true})
UserSchema.methods.passwordCrypt=async password=>{
    const salt= await bcrypt.salt(10);
    return await bcrypt.hash(password,salt) //conataseña cifrada 
}
UserSchema.methods.passwordMatch= async function (password){
    return await bcrypt.compare(password, this.password)
}
// module.exports= model('User',UserSchema);
export default model('User', UserSchema)