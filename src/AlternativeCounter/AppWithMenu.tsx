import React, {useEffect, useState} from 'react';
import './App1.css';
import {ResultValue} from './ResultValue/ResultValue';
import {Button} from './Button/Button';
import {Input} from './Input/Input';


function AppWithMenu() {

    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)
    const [error, setError] = useState('')
    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue1')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue1')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
        let minValueAsString = localStorage.getItem('minValue1')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
        let errorAsString = localStorage.getItem('error1')
        if (errorAsString) {
            let newError = JSON.parse(errorAsString)
            setError(newError)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [minValue])
    useEffect(() => {
        localStorage.setItem('error', JSON.stringify(error))
    }, [error])


    const incHandler = () => {
        setValue(value + 1)
    }
    const resetHandler = () => {
        setValue(minValue)
    }
    const setHandler = () => {
        setShowMenu(!showMenu)
    }
    const setNewMinValue = (newMinValue: number) => {
        if (newMinValue >= maxValue) {
            setError('Incorrect value!!!')
        } else {
            setError('')
        }
        setValue(newMinValue)
        setMinValue(newMinValue)

    }
    const setNewMaxValue = (newMaxValue: number) => {
        if (newMaxValue <= minValue) {
            setError('Incorrect value!!!')
        } else {
            setError('')
        }
        setMaxValue(newMaxValue)

    }


    return (
        <div className="App">
            <div className="counter1">
                <div className={showMenu ? 'noneStyle1' : ''}>
                <div className="resultValue1">
                    <ResultValue
                        value={value}
                        maxValue={maxValue}
                    />
                </div>
                <div className="buttons1">
                    <Button name='inc'
                            onClick={incHandler}
                            value={value}
                            maxValue={maxValue}
                            minValue={minValue}
                    />
                    <Button
                        name='set'
                        onClick={setHandler}
                        value={value}
                        maxValue={maxValue}
                        minValue={minValue}
                    />
                    <Button name='reset'
                            onClick={resetHandler}
                            value={value}
                            maxValue={maxValue}
                            minValue={minValue}
                    />
                </div>
            </div>
            </div>
            <div className={showMenu ? 'inputsMenu1' : 'noneStyle1'}>
                <div className='message1'>Enter a value:</div>
                <div className='minMaxValue1'>MinValue</div>
                <div className='input1'>
                    <Input
                        name='minValue'
                        addValue={setNewMinValue}
                        value={minValue}
                    />
                </div>
                <div className='minMaxValue'>MaxValue</div>
                <div className='input'>
                    <Input
                        name='maxValue'
                        addValue={setNewMaxValue}
                        value={maxValue}
                    />
                </div>
                <div className='error1'>{error}</div>
                <Button
                    name='set'
                    onClick={setHandler}
                    value={value}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            </div>
        </div>
    )
        ;
}


export default AppWithMenu;
