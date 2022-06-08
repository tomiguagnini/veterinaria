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

            console.log('new patient add')
            res.json(savedPatient)
        } catch (error) {
            res.status(404).send('usuario no encontrado')
        }

    }

})
router.get('/getPatients/:id', async (req, res) => {
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





export default router;