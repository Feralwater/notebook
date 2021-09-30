import React from 'react';
import style from "./Button.module.scss"

type PropsButtonType = {
    onClick: () => void
}

const Button: React.FC<PropsButtonType> = (
    {children, onClick}
) => {
    return (
        <button onClick={onClick}
                className={style.btn}
        >
            {children}
        </button>
    );
};

export default Button;