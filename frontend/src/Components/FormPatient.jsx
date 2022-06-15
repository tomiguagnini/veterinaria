import React from 'react';
import Input from './Input';
import { useState, useEffect } from 'react';



const FormPatient = ({submit,setData,values=''}) => {

    const [name, setName] = useState(values.name);
    const [ownerName, setOwnerName] = useState(values.ownerName);
    const [ownerEmail, setOwnerEmail] = useState(values.ownerEmail);
    const [date, setDate] = useState(values.date);
    const [symptom, setSymptom] = useState(values.symptom);

    
    useEffect(() => {
        const newPatient = {
            name,
            ownerName,
            ownerEmail,
            date,
            symptom
        }
        setData(newPatient)
        return () => {
            
        };
    }, [name,ownerEmail,ownerName,date,symptom]);
  

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
        
        
    }
    
    const handleClick = ()=>{
        setName('')
        setOwnerEmail('')
        setDate('')
        setOwnerName('')
        setSymptom('')
    }
   

    return (
        <>
            <form className='bg-slate-400 shadow-2xl p-5 rounded-md' onSubmit={submit} >
                
                <Input id={1}label='Nombre de la mascota' value={name} onChange={handlePatietnsChange}> </Input>
                <Input id={2}label='Nombred del propietario' value={ownerName} onChange={handlePatietnsChange}> </Input>
                <Input id={3}label='Email del propietario' value={ownerEmail} onChange={handlePatietnsChange}> </Input>
                <Input id={4}label='Fecha Alta' type='date' value={date} onChange={handlePatietnsChange}> </Input>
                <Input id={5}label='Sintomas' value={symptom} onChange={handlePatietnsChange}> </Input>
                <button className='bg-rose-400 p-2 rounded w-full' type='submit'>Enviar</button>
                <button className='clear'onClick={handleClick}></button>

            </form>
        </>
    );
}

export default FormPatient;
