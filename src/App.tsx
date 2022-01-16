import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";
import {ResultValue} from "./Components/ResultValue/ResultValue";

function App() {
    let [value, setValue] = useState<number>(0)
    let [highValue, setHighValue] = useState<boolean>(false)

    const incrementValue = () => {
        if (value >= 5){
            setHighValue(true)
            return
        } else {
            setValue(value + 1)
        }}

    const resetValue = () => {
        setHighValue(false)
        setValue(0)
    }

    return (
        <div className="App">
            <div className="appContainer">
               <ResultValue
                   value={value}
                   highValue={highValue}
               />
                <div className="buttonsContainer">
                    <Button
                        name='inc'
                        incrementValue={incrementValue}
                        resetValue={resetValue}
                        value={highValue}
                    />
                    <Button
                        name='reset'
                        incrementValue={incrementValue}
                        resetValue={resetValue}
                        value={highValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
