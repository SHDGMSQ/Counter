import React from "react";
import s from './ResultValue.module.css'

export type ResultValuePropsType = {
    value: number
    highValue:boolean
}

export const ResultValue = (props: ResultValuePropsType) => {
    return (
        <div className={!props.highValue ? s.resultValue : s.highLimValue}>
            {props.value}
        </div>
    )
}