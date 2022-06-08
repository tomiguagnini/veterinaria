import React from 'react';
import Input from './Input';
import { useState } from 'react';


const FormPatient = ({submit,setData}) => {

    const [name, setName] = useState([]);
    const [ownerName, setOwnerName] = useState([]);
    const [ownerEmail, setOwnerEmail] = useState([]);
    const [date, setDate] = useState([]);
    const [symptom, setSymptom] = useState([]);
    

    const handlePatietnsChange = (event) => {
        const value = event.target.value
        switch (event.target.id) {
            case '1':
                setName(value)
                break;
            case '2':
                setOwnerName(value)
                break;
            case '3':
                setOwnerEmail(value)
                break;
            case '4':
                setDate(value)
                break;
            case '5':
                setSymptom(value)
                break;
        }
        
        const newPatient = {
            name,
            ownerName,
            ownerEmail,
            date,
            symptom
        }
        setData(newPatient)
    }
    
    
    const clearForm = () => {
        setName('')
        setOwnerName('')
        setOwnerEmail('')
        setDate('')
        setSymptom('')
    }

    return (
        <>
            <form className='bg-slate-400 shadow-2xl p-5 rounded-md' onSubmit={submit}>
                
                <Input id={1}label='Nombre de la mascota' value={name} onChange={handlePatietnsChange}> </Input>
                <Input id={2}label='Nombred del propietario' value={ownerName} onChange={handlePatietnsChange}> </Input>
                <Input id={3}label='Email del propietario' value={ownerEmail} onChange={handlePatietnsChange}> </Input>
                <Input id={4}label='Fecha Alta' type='date' value={date} onChange={handlePatietnsChange}> </Input>
                <Input id={5}label='Sintomas' value={symptom} onChange={handlePatietnsChange}> </Input>
                <button className='bg-rose-400 p-2 rounded w-full' type='submit'  >Enviar</button>

            </form>
        </>
    );
}

export default FormPatient;
