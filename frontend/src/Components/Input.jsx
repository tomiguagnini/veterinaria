import React from 'react';

const Input = ({ label,type,value,onChange,msgErr,max}) => {
    return (
        <div>
            <div className="col-span-6 sm:col-span-2 ">
                <label  
                    className=" block text-sm font-medium ">
                    {label}
                </label>
                <input
                    type={type}
                    name={label}
                    placeholder={label}
                    className="bg-white w-full  h-8 block  sm:text-sm border focus:outline-none focus:ring-rose-400 focus:border-rose-400 rounded"
                    value={value}
                    onChange={onChange}
                    maxLength={max}
                    
                />
                <label className='text-sm pl-3 text-rose-700'>{msgErr?msgErr:''}</label>
            </div>
        </div>
    );
}

export default Input;
