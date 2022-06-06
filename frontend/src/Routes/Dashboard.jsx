import React from 'react';
import Input from '../Components/Input';
import ItemPaciente from '../Components/ItemPaciente';
import { useState, useEffect } from 'react';
import axios from 'axios';


const URI = 'http://localhost:5000/api';


const Dashboard = () => {
    const [namePatient, setNamePatient] = useState([]);
    const [ownerName, setOwnerName] = useState([]);
    const [ownerEmail, setOwnerEmail] = useState([]);
    const [date, setDate] = useState([]);
    const [symptom, setSymptom] = useState([]);
    const [patients, setPatients] = useState([]);
    const [user, setUser] = useState([]);


    const config = {
        headers: {
            "x-access-token": user.token,
            "Content-Type": "application/json"
        }
    }



    const addPatients = (event) => {
        event.preventDefault()


        axios({
            method: 'post',
            url: URI + "/newPatients",
            data: {
                name: namePatient,
                ownerName,
                ownerEmail,
                date,
                symptom,
                userId: user.id
            },
            headers: {
                "x-access-token": user.token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.status === 200){
                    clearForm()
                    getPatients()

                }

                
            })

    }

    const clearForm = () => {
        setNamePatient('')
        setOwnerName('')
        setOwnerEmail('')
        setDate('')
        setSymptom('')
    }

    const handlePatietnsChange = (event) => {
        const value = event.target.value
        switch (event.target.id) {
            case '1':
                setNamePatient(value)
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

    useEffect(() => {
        const setUserLocal = async()=>{
            const usr = await JSON.parse(window.localStorage.getItem("USER"))
            setUser(usr)

        }
        setUserLocal()
        
    }, []);
    
    useEffect(() => {
        getPatients()
    }, [user]);



    const getPatients = () => {
        if (user) {
                axios.get(URI + '/getPatients/' + user.id, config)
                .then(res => setPatients(res.data))

        } else {
            window.location = '/login'
        }
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
                    <p className='text-center text-sm p-2'>anade tus pacientes y administralos</p>

                    <form className='bg-slate-400 shadow-2xl p-5 rounded-md' onSubmit={addPatients}>
                        <Input label='Nombre de la mascota'   value={namePatient} onChange={handlePatietnsChange}> </Input>
                        <Input label='Nombred del propietario'value={ownerName}   onChange={handlePatietnsChange}> </Input>
                        <Input label='Email del propietario'  value={ownerEmail}  onChange={handlePatietnsChange}> </Input>
                        <Input label='Fecha Alta' type='date' value={date}        onChange={handlePatietnsChange}> </Input>
                        <Input label='Sintomas'               value={symptom}     onChange={handlePatietnsChange}> </Input>
                        <button className='bg-rose-400 p-2 rounded w-full' type='submit'  >Enviar</button>

                    </form>
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
