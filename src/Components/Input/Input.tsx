import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Input.module.css';

type InputPropsType = {
    name: 'minValue' | 'maxValue'
    addValue: (value: number) => void
    value: number
}

export const Input = (props: InputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            return;
        }
        props.addValue(+e.currentTarget.value);
    };

    const addValue = () => {
        props.addValue(props.value);
    };
    const onBlurHandler = () => {
        addValue();
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addValue();
        }
    };


    return <div>
        <input
            className={s.input}
            type="number"
            value={props.value}
            onChange={onChangeInputHandler}
            onBlur={onBlurHandler}
            onKeyPress={onKeyPressHandler}
        />
    </div>;
};