import React from 'react';
import { useState } from 'react';
import Input from '../Components/Input';
import { ValidateEmail } from '../helpers/validate';
import axios from 'axios';
const URI = 'http://localhost:5000/api';

const Register = () => { 
    
    const [name, setName] = useState({value:'',validate:''});
    const [lastname, setLastname] = useState({value:'',validate:''});
    const [email, setEmail] = useState({value:'',validate:''});
    const [password, setPassword] = useState({value:'',validate:''});
    const [phone, setPhone] = useState({value:'',validate:''});

    const PostData = ()=>{
        axios({
            method: 'post',
            url: URI + "/register",
            data: {
                name:name.value,
                lastname:lastname.value,
                email:email.value,
                password:password.value,
                phone:phone.value,
            }
          }).then(response => console.log(response))
    }


    const verificarCampos = ()=>{
        if( name.validate && 
            lastname.validate &&
            email.validate &&
            password.validate) PostData()
    }
    const setNameState = (e)=>{
        const aux = {value: e.target.value} 
        if(e.target.value.length >= 2 ){
            aux.validate = true;
        }else
            aux.validate = false;
            aux.err = 'Incorrect name'
        setName(aux)
    }
    const setLastNameState = (e)=>{
        const aux = {value: e.target.value} 
        if(e.target.value.length >= 2 ){
            aux.validate = true;
        }else
            aux.validate = false;
            aux.err = 'Incorrect name'
        setLastname(aux)
    }

    const setEmailStatus =(e)=>{
        const aux = {value: e.target.value} 
        if (ValidateEmail(e.target.value)){
            aux.validate = true
        }else
            aux.validate = false
            aux.err = 'Incorrect email'
        setEmail(aux)
    }
    const setPasswordState = (e)=>{
        const aux = {value: e.target.value} 
        if (e.target.value.length >= 2 ){
            aux.validate = true
        }else
            aux.validate = false
            aux.err = 'Incorrect password'
        setPassword(aux)
    }

    return (
        <div>
        <div className='container mx-auto  mt-10 '>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-slate-900'>Register</h2>
            <div className="mt-5 grid place-content-center">
                <form >
                    <div className="shadow bg-slate-300 overflow-hidden rounded ">
                        <div className="p-6 sm:p-12 md:w-full">
                            <div className="">
                                <Input label="First Name" type="text" value={name.value} onChange={setNameState} msgErr={name.validate?'':name.err} max="30"/>

                                <Input label="Last Name" type="text" value={lastname.value} onChange={setLastNameState} max="30"/>

                                <Input label="Email" type="text" value={email.value} onChange={setEmailStatus} msgErr={email.validate?'':email.err}/>

                                <Input label="Password" type="password" value={password.value} onChange={setPasswordState} msgErr={password.validate?'':password.err}/>   

                                <Input label="Phone" type="text" value={phone.value} onChange={setPhone}/>

                                
                                <button type="button"
                                        className="text-white bg-rose-700 hover:bg-rose-600 rounded-md objet-right w-72 h-8"
                                        onClick={verificarCampos}
                                        >
                                        Enviar
                                        </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </div>
    );
}

export default Register;
