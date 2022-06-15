import express from "express";
import Patient from "../models/patient.js";
import User from "../models/user.js"

const router = express.Router();


router.post('/newPatients/:id', async (req, res) => {
    const body = req.body;
    const userId = req.params.id;
    

    if (userId) {

        try {
            const user = await User.findById(userId)


            const patient = Patient({
                name: body.name,
                ownerName: body.ownerName,
                ownerEmail: body.ownerEmail,
                date: body.date,
                symptom: body.symptom,
                user: user._id
            })
            const savedPatient = await patient.save()


            user.patients = user.patients.concat(savedPatient._id)
            await user.save()

            res.json(savedPatient)
        } catch (error) {
            res.status(404).send('usuario no encontrado')
        }

    }

})
router.get('/getManyPatients/:id', async (req, res) => {
    const { id } = req.params;
    if (id) {
        try {
            const patient = await Patient.find({ user: id })
            res.json(patient)

        } catch (error) {
            res.status(404).send('usuario no encontrado')
        }

    }


})

router.get('/getPatient/:id', async (req, res) => {
    const { id } = req.params;
    if (id) {
        try {
            const patient = await Patient.findById( id )
            res.json(patient)

        } catch (error) {
            res.status(404).send('Paciente no encontrado')
        }

    }


})




router.delete('/deletePatient/:id', async (req, res) => {
    const { id } = req.params;

    if (id) {
        try {

            const patient = await Patient.findById(id)
            await Patient.findByIdAndRemove(id)

            const user = await User.findById(patient.user)
            user.patients = user.patients.filter((e) => e != id)
            await user.save()
            res.status(200).send('eliminado')

        } catch (error) {
            res.status(400).send('id no encontrado')
        }
    }

})

router.put('/editPatient/:id', async (req,res)=>{
    const {id} = req.params;
    const {name,ownerEmail,ownerName,date,symptom} = req.body

    if (id && name && ownerEmail && ownerName && date && symptom){
        try{
            const patient = await Patient.findById(id)
            patient.name = name;
            patient.ownerName=ownerName;
            patient.ownerEmail= ownerEmail;
            patient.date = date;
            patient.symptom = symptom;
            
            await patient.save()

            res.status(200).send('update')
        }catch (err){
            res.status(404).send('cant update')
        }
        
    }

})





export default router;