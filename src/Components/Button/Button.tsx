import React, {useState} from "react";
import s from './Button.module.css'

export type ButtonPropsType = {
    incrementValue: () => void
    resetValue: () => void
    name: 'inc' | 'reset'
    value: boolean
}

export const Button = (props: ButtonPropsType) => {

    let [state, setState] = useState<boolean>(false)

    const onClickButtonHandler = () => {
        props.name === 'inc' ? props.incrementValue() : props.resetValue()
        props.value ? setState(true) : setState(false)
    }

    return (
        <div>
            <button
                className={s.buttonsStyle}
                onClick={onClickButtonHandler}
                disabled={state && props.name !== 'reset'}
            >
                {props.name}
            </button>
        </div>
    )
}
