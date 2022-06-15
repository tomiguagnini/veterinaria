import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    name:{ type: String,required: true},
    lastname:{type: String, required: true},
    email:{ type: String,required: true, unique:true},
    password:{ type: String,required: true},
    token:{ type: String,required: true},
    phone:{ type: Number,required: false},
    confirm:{ type: Boolean,required: false},
    patients:[{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}]

})

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })
  


export default mongoose.model('User', UserSchema);