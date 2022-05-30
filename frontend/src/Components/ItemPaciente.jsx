import React from 'react';
import Button from './Button';

const ItemPaciente = ({desc='chuflito'}) => {

    return (
        <div>
            <div className=' bg-slate-400 rounded-md p-5 mb-2'>
                <div className='flex'>
                        <p className=' font-extrabold'>Nombre:</p>
                        <p className='mx-1'>{desc}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Propietario:</p>
                        <p className='mx-1'>{desc}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Email:</p>
                        <p className='mx-1'>{desc}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Fecha:</p>
                        <p className='mx-1'>{desc}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Sintomas:</p>
                        <p className='mx-1'>{desc}</p>               </div>
                       
                        <div className='flex justify-between'>
                            <Button color=' bg-amber-300' text='Editar'></Button>
                            <Button color=' bg-red-700' text='Eliminar'></Button>
                            

                        </div>

                    </div>
        </div>
    );
}

export default ItemPaciente;
