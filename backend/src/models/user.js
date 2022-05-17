import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    name:{ type: String,required: true},
    lastname:{type: String, required: true},
    email:{ type: String,required: true},
    password:{ type: String,required: true},
    token:{ type: String,required: true},
    phone:{ type: Number,required: false},
    confirm:{ type: Boolean,required: false},

})


export default mongoose.model('User', UserSchema);