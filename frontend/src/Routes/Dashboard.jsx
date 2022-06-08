import React from 'react';
import ItemPaciente from '../Components/ItemPaciente';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FormPatient from '../Components/FormPatient';


const URI = 'http://localhost:5000/api';


const Dashboard = () => {

    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState([])
    const [user, setUser] = useState([]);


    const verficUser = ()=>{
        return user.token?true:false;
           
    }

    const config = {

        headers: {
            "x-access-token":user ? user.token:"",
            "Content-Type": "application/json"
        }
    }



    const addPatients = (event) => {
        event.preventDefault()
        console.log(newPatient)
        
        axios({
            method: 'post',
            url: URI + "/newPatients/"+ user.id,
            data: newPatient,
            config
        })
            .then(response => {
                if (response.status === 200){
                    getPatients()

                }

                
            })

    }

    

    const setUserLocal = async ()=>{
        const usr = await JSON.parse(window.localStorage.getItem("USER"))
        await setUser(usr)
        return usr
    }

    

    //getPatients()
    setTimeout(()=>getPatients(),1000)

    useEffect(() => {
        setUserLocal()
        

        
        return () =>{
            
        }
        
    }, []);
    
    
    

    const getPatients =  () => {
         axios.get(URI + '/getPatients/' + user.id, config)
        .then(res => setPatients(res.data))
       
    }
    const onClickDelete = async (id) => {
        await axios.delete(URI + '/deletePatient/' + id, config)
        getPatients()


    }
    const closeSession = ()=>{
        window.localStorage.removeItem('USER');
        window.location.href = '/login'

    }




    return (
        <div className=''>
            <div className='flex flex-col md:flex-row sm:h-32 sm:justify-between sm:items-center bg-rose-400'>
                <h2 className='text-2xl p-5 text-center '>Administrador de pacientes</h2>
                <nav className='flex justify-around p-5 list-none'>
                    <a className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800'>Pacientes</a>
                    <li className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800'>Perfil</li>
                    <a  className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800' onClick={closeSession}>Cerrar session</a>
                </nav>
            </div>


            <div className='grid grid-cols-1 m-3 md:gap-4 md:grid-cols-2 xl:grid-cols-3 '>

                <div className='xl:col-span-1 '>
                    <h3 className='text-center text-xl p-5'>Administrador de Pacientes</h3>
                    <p className='text-center text-sm p-2'>Anade tus pacientes y administralos</p>
                    <FormPatient submit={addPatients} setData={setNewPatient}></FormPatient>

                </div>

                <div className='xl:col-span-2 '>
                    <h3 className='text-center text-xl p-5'>Listado de pacientes</h3>
                    <p className='text-center text-sm p-2'> Administra tus pacientes y citas </p>
                    <div className=' bg-slate-300 shadow-2xl rounded'>
                        {
                            patients.map((e) => {

                                return (
                                    <ItemPaciente
                                        id={e.id}
                                        name={e.name}
                                        ownerName={e.ownerName}
                                        ownerEmail={e.ownerEmail}
                                        date={e.date}
                                        symptom={e.symptom}
                                        onClickDelete={onClickDelete}
                                    ></ItemPaciente>
                                )
                            })

                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
