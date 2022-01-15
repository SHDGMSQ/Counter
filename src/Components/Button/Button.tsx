import React from "react";
import s from './Button.module.css'
export type ButtonPropsType = {
    incrementValue: () => void
    resetValue: () => void
    name: 'inc' | 'reset'
}

export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => props.name === 'inc'? props.incrementValue() : props.resetValue()

    return (
        <div>
            <button
                    className={s.buttonsStyle}
                    onClick={onClickButtonHandler}
            >
                {props.name}
            </button>
        </div>
    )
}
