import React from 'react';

const Input = ({ label,type,value,onChange,msgErr,max,id}) => {
    return (
        <div>
                <label  
                    className=" block text-sm font-medium ">
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    name={label}
                    placeholder={label}
                    className="bg-white w-full  h-10 block  sm:text-sm border focus:outline-none focus:ring-rose-400 focus:border-rose-400 rounded"
                    value={value}
                    onChange={onChange}
                    maxLength={max}
                    required
                    
                />
                <label className='text-sm pl-3 text-rose-700'>{msgErr?msgErr:''}</label>
        </div>
    );
}

export default Input;
