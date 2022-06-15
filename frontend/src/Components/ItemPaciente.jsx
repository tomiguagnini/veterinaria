import React from 'react';


const ItemPaciente = ({id,name,ownerName,ownerEmail,date,symptom,onClickDelete,onClickEdit}) => {

    return (
        <div>
            <div className=' bg-slate-400 rounded-md p-5 mb-2 shadow-xl'>
                <div className='flex'>
                        <p className=' font-extrabold'>Nombre:</p>
                        <p className='mx-1'>{name}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Propietario:</p>
                        <p className='mx-1'>{ownerName}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Email:</p>
                        <p className='mx-1'>{ownerEmail}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Fecha:</p>
                        <p className='mx-1'>{date}</p>
                </div>
                <div className='flex'>
                        <p className=' font-extrabold'>Sintomas:</p>
                        <p className='mx-1'>{symptom}</p>               </div>
                       
                        <div className='flex justify-between'>
                            <button className=' bg-amber-300 p-2 rounded'onClick={()=>onClickEdit(id)} >Editar</button>
                            <button className=' bg-red-700 p-2 rounded' onClick={()=>onClickDelete(id)} >Eliminar</button>
                            

                        </div>

                    </div>
        </div>
    );
}

export default ItemPaciente;
