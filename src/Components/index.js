import React, { useState, useRef } from 'react'
//styles
import {WrapMain} from './index.styles'
export default function GroceryStore() {
    const [valueInput, setValueInput] = useState("")
    const [list, setList] = useState([])
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        let newVal = e.target.value
        console.log('newval ne', newVal)
        setValueInput(newVal)

    }
    const handleChange = (e) => {
        const newValue = e.target.value
    }
    return (
        <WrapMain>
            <div className="title">Grocery Bud</div>
            <div className="wrap-input">
                <input ref={inputRef} id="input" type="text" placeholder="e.g. eggs" value={valueInput} onChange={(e) => handleChange(e)}/>
                <button className="btn-submit" type="submit" onClick={() => handleSubmit(inputRef.current)}>Submit</button>
            </div>
            {list.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </WrapMain>
    )
}
