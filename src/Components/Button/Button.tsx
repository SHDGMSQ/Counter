import React from 'react';
import s from './Button.module.css';

export type ButtonPropsType = {
    name: 'inc' | 'reset'
    onClick: () => void
    value: number
    maxValue: number
    minValue: number
}

export const Button = (props: ButtonPropsType) => {


    const onClickButtonHandler = () => {
        props.onClick();
    };

    return (
        <div>
            <button
                className={s.button}
                onClick={onClickButtonHandler}
                disabled={props.value >= props.maxValue && props.name === 'inc' || props.value === props.minValue && props.name === 'reset'}
            >
                {props.name}
            </button>
        </div>
    );
};
