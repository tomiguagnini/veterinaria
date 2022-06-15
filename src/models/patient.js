import mongoose from "mongoose"


const PatientSchema = mongoose.Schema({
    name:{ type: String,required: true},
    ownerName:{ type: String,required: true},
    ownerEmail:{ type: String,required: true},
    date:{ type: String,required: true},
    symptom:{type:String,required:true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

PatientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


export default mongoose.model('Patient', PatientSchema);