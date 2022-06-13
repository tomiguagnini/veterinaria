import React from 'react';
import foto from '../assets/perro.png'


const Home = () => {
    return (
        <div>
            <nav>
                <div className='flex flex-row justify-between md:justify-end items-center'>
                    <a className='p-1 bg-rose-500 hover:bg-rose-400 text-white rounded-md m-3'
                    href='/login'>
                        Iniciar Sesion
                    </a>
                    <a className='p-1 bg-rose-500 hover:bg-rose-400 text-white rounded-md m-3 '
                    href="/register">
                        Registrarse
                    </a>
                </div>
                
            </nav>
            <div className='h-96 flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-extra-bold text-center text-slate-900 '>Veterinaria</h1>
               
            </div>

        </div>
    );
}

export default Home;
