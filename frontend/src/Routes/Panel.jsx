import React from 'react';
import Input from '../Components/Input';
import ItemPaciente from '../Components/ItemPaciente';
import Button from '../Components/Button';
const Panel = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row sm:h-32 sm:justify-between sm:items-center bg-rose-400'>
                <h2 className='text-2xl p-5 text-center '>Administrador de pacientes</h2>
                <nav className='flex justify-around p-5 list-none'>
                    <a  className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800'>Pacientes</a>
                    <li className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800'>Perfil</li>
                    <a href='/' className='px-5 cursor-pointer hover:decoration-solid hover:text-rose-800'>Cerrar session</a>
                </nav>
            </div>


            <div className='grid grid-cols-1 m-3 md:gap-4 md:grid-cols-2 xl:grid-cols-3 '>
                
                <div className='xl:col-span-1 '>
                    <h3 className='text-center text-xl p-5'>Administrador de Pacientes</h3>
                    <h4 className='text-center text-sm p-2'>anade tus pacientes y administralos</h4>
                    
                    <div className='bg-slate-400 shadow-2xl p-5 rounded-md '>
                        <Input label='Nombre de la mascota'></Input>
                        <Input label='Nombred del propietario'> </Input>
                        <Input label='Email del propietario'> </Input>
                        <Input label='Fecha Alta' type='date'> </Input>
                        <Input label='Sintomas' > </Input>
                        <Button color='bg-rose-400' text='Guardar'></Button>

                    </div>
                </div>
                
                <div className='xl:col-span-2 '>
                    <h3 className='text-center text-xl p-5'>No hay pacientes</h3>
                    <h4 className='text-center text-sm p-2'> comienza a anadir pacientes aqui </h4>
                    
                    <div className=' bg-slate-300 shadow-2xl rounded'>
                        <ItemPaciente></ItemPaciente>
                        <ItemPaciente></ItemPaciente>
                        <ItemPaciente></ItemPaciente>

                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
