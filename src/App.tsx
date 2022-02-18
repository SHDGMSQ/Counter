import React, {useEffect, useState} from 'react';
import './App.css';
import {ResultValue} from "./Components/ResultValue/ResultValue";
import {Button} from "./Components/Button/Button";
import {Input} from "./Components/Input/Input";
import AppWithMenu from "./AlternativeCounter/AppWithMenu";


function App() {

    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
        let errorAsString = localStorage.getItem('error')
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
            <div className="counter">
                <div className="resultValue">
            <ResultValue
                value={value}
                maxValue={maxValue}
            />
                </div>
            <div className="buttons">
            <Button name='inc'
                    onClick={incHandler}
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
            <div className='inputsMenu'>
                <div className='message'>Enter a value: </div>
                <div className='minMaxValue'>MinValue</div>
                <div className='input'>
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
            <div className='error'>{error}</div>
            </div>
            <AppWithMenu/>
        </div>
    );
}


export default App;
