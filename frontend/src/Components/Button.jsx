import React from 'react';

const Button = ({color, text}) => {
    const str = color + ' rounded-lg h-8 w-24 my-3 '
    return (
        <div>
            <button className={str}>{text}</button>
        </div>
    );
}

export default Button;
