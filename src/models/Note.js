// const {Schema, model}= require('mongoose');
import { Schema, model } from "mongoose"
const NoteSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
},{timestamps: true,})
// module.exports= model('Notes', NoteSchema)
export default model('Notes',NoteSchema);