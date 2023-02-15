import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    age:{
        type: 'string',
        required: true
    },
    gender:{
        type: 'string',
        required: true
    },
    mobileNumber:{
        type: 'string',
        required: true
    },
})

export default mongoose.model('Person',userSchema)