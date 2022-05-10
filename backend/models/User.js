import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = mongoose.Schema({
    name:{ type: String,required: true},
    lastname:{type: String, required: true},
    email:{ type: String,required: true},
    password:{ type: String,required: true},
    token:{ type: String,required: true},
    phone:{ type: Number,required: false},
    confirm:{ type: Boolean,required: false},

})

UserSchema.methods.encrypPassword = async pass => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(pass,salt)
}

UserSchema.methods.matchPassword = async pass => {
    return await bcrypt.compare(pass, this.password)
}

export default mongoose.model('User', UserSchema);