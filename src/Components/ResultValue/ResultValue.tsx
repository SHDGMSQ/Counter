import React from "react";
import s from './ResultValue.module.css'


export type ResultValuePropsType = {
    value: number
    maxValue: number
}

export const ResultValue = (props: ResultValuePropsType) => {
    return (
        <div className={props.value >= props.maxValue ? s.maxValue : s.resultValue}>
            {props.value}
        </div>
    )
}