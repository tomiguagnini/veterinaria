import React from 'react';
import ItemPaciente from '../Components/ItemPaciente';
import { useState, useEffect } from 'react';
import FormPatient from '../Components/FormPatient';
import servicePatients from '../services/servicePatients';




const Dashboard = () => {
    
    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState([])
    
    
    useEffect(() => {
       servicePatients.getManyPatients(setPatients,handleGetError);
       console.log('a')
        return () =>{
            
        }
        
    }, []);
    useEffect(() => {
        console.log('b')
        return () => {
            
        };
    }, [patients]);

    const handleGetError = (res) =>{
        if(res.status === 401){
            closeSession()
        }
    }

    const handleSubmitPatient = (event) => {
        event.preventDefault()
        servicePatients.addPatietns(newPatient)
        servicePatients.getManyPatients(setPatients,handleGetError)
        
    }
    const onClickDelete = (id) => {
       servicePatients.deletePatient(id)
       servicePatients.getManyPatients(setPatients,handleGetError)

    }
    const onClickEdit = (id)=>{
        window.location.href ='/edit/'+ id;
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
                    <FormPatient submit={handleSubmitPatient} setData={setNewPatient}></FormPatient>

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
                                        onClickEdit={onClickEdit}
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
