import axios from "axios";

const baseUrl= 'http://localhost:5000/api'

const user = JSON.parse(window.localStorage.getItem("USER"))

const config = {
    headers: {
        "x-access-token":user ? user.token:"",
        "Content-Type": "application/json"
    }
}

const editPatient = (id, data)=>{
    axios.put(baseUrl + '/editPatient/' + id, data, config)
    .then(response=>console.log(response))
}

const getManyPatients =  (set,handleError) => {
    axios.get(baseUrl + '/getManyPatients/' + user.id, config)
    .then(res => set(res.data))
    .catch(err => handleError(err.response))
   
}
const getPatient =  (setPatient,handleError,id) => {
    axios.get(baseUrl + '/getPatient/' + id, config)
    .then(res => setPatient(res.data))
    .catch(err => handleError(err.response))
   
}

const addPatietns = (data) =>{
    axios.post(baseUrl + '/newPatients/' + user.id, data, config)
    .then(response => console.log(response.data))
}

const deletePatient = (id) => {
    axios.delete(baseUrl + '/deletePatient/' + id, config)
    .then(res=> res)
    .catch(err => err.response)
 }




export default {editPatient, getManyPatients,addPatietns,getPatient,deletePatient}