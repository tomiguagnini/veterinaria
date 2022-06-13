import React from 'react';
import FormPatient from '../Components/FormPatient';
import { useState, useEffect } from 'react';
import services from '../services/servicePatients';
import { useParams } from 'react-router-dom';


const Edit = () => {
    const [newPatient, setnewPatient] = useState('');
    const [patient, setPatient] = useState('')
    const {id} = useParams()

    useEffect(() => {
        services.getPatient(setPatient,(a)=>a,id)
        
        return () => {
            
        };
    }, []);

    const sendForm = async (e)=>{
        e.preventDefault()
        console.log(newPatient)
        const response = await services.editPatient(id,newPatient)
        if ( response.status === 200 ){
            window.location.href = '/dashboard'
        }
    }


    return (
        <>
            <header className='h-12 bg-rose-400 flex '>
                <a href='/dashboard' className='text-white font-bold p-3 hover:text-slate-300 text-center hover:underline '>  Volver</a>
            </header>
            <div className=' '>
                <h2 className='text-center text-2xl mt-8'>Editar...</h2>
                <div className='m-3 sm:m-9 lg:mx-32 xl:mx-96 2xl:px-32'>
                    {patient ?
                    <FormPatient submit={sendForm} setData={setnewPatient} values={patient} ></FormPatient>
                    :''
                    }
                </div>
                
            </div>   
        </>
    );
}

export default Edit;
