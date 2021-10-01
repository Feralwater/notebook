import React from 'react';
import style from "./Button.module.scss"

type PropsButtonType = {
    onClick: () => void
    className: string
}

const Button: React.FC<PropsButtonType> = (
    {children, onClick, className}
) => {
    return (
        <button onClick={onClick}
                className={style[className]}
        >
            {children}
        </button>
    );
};

export default Button;