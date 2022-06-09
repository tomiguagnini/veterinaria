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

const getPatients =  (setPatients) => {
    axios.get(baseUrl + '/getPatients/' + user.id, config)
    .then(res => setPatients(res.data))
    .catch(err => console.log(err.response.status) === 401 ? '':'')
   
}

const addPatietns = (data) =>{
    axios.post(baseUrl + '/newPatients/' + user.id, data, config)
    .then(response => console.log(response.data))
}




export default {editPatient, getPatients,addPatietns}