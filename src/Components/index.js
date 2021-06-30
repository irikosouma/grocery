import React, { useState, useRef, useEffect } from 'react'
//styles
import {WrapMain} from './index.styles'
//images 
import Edit from '../assets/images/edit'
import Delete from '../assets/images/delete'
export default function GroceryStore() {
    
    const [valueInput, setValueInput] = useState("")
    const [isEmpty, setIsEmpty] = useState()
    
    const [indexEdit, setIndexEdit] = useState(-1);
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const inputRef = useRef(null)
    
    const handleSubmit = () => {
        if(indexEdit !== -1) {
            let newValue = inputRef.current
            let newVal = newValue.value
            const inputItem = {id: newVal, keyValue: newVal}
            const newList = list.map((item, _) => 
            item.id === indexEdit ? inputItem : item
            )
            setList(  newList)
            setValueInput("")
            setIndexEdit(-1)
            setIsEmpty(2)
            
        } else {
            if(valueInput === "") {
                setList([...list])
                setIsEmpty(3)
            } else {
                const inputItem = {id: valueInput, keyValue: valueInput}
                setList( [inputItem, ...list] )
                setIsEmpty(1)
            }
        }
        {
            setValueInput("")
        }
    }
    const handleDelete = (idDelete) => {
        const newList = list.filter((item, _) => item.id !== idDelete)
        setList(newList)
        let myStorage = window.localStorage
        myStorage.removeItem(idDelete);
        setIsEmpty(-1)
    }
    const handleEdit = (idEdit) => {
        setIndexEdit(idEdit)
        setValueInput(idEdit)
    }
    const handleClearAll = () => {
        setList([])
        setIsEmpty(0)
        myStorage.clear()
    }
    useEffect(() => {
        return () => {
            setTimeout(() => {
                setIsEmpty()
            }, 500)
        }
    }, [isEmpty])
    let myStorage = window.localStorage
    
    if(list.length !== 0) {
        myStorage.setItem('list', JSON.stringify(list))
    }
    //     // myStorage.setItem('list', JSON.stringify(list))
    //     console.log('my storage', myStorage.getItem('list'))
    
    return (
        <WrapMain>
            
            {
                isEmpty === 1 ? 
                <div className="add-announcement">Item Added To The List</div>
                : 
                ""
            }
            {
                isEmpty === 2 ? 
                <div className="add-announcement">Value Changed</div>
                : 
                ""
            }
            {
                list.length === 0 && isEmpty === 0 ?
                <div className="delete-announcement">Empty List</div>
                :
                ""
            }
            {
                list.length === 0 && isEmpty === -1 ?
                <div className="delete-announcement">Removed Item</div>
                :
                ""
            } 
            {
                valueInput === "" && isEmpty === 3 ?
                <div className="delete-announcement">Please Enter Value</div>
                :
                ""
            }   
            {
                list.length === 0 ? 
                <>
                    <div className="title">Grocery Bud</div>
                    <div className="wrap-input">
                        <input ref={inputRef} id="input" type="text" placeholder="e.g. eggs" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                        <button className="btn-submit" type="submit" onClick={handleSubmit}>{indexEdit !== -1 ? "Edit" : "Submit" }</button>
                    </div>
                </>
                :
                <>
                    <div className="title">Grocery Bud</div>
                        <div className="wrap-input">
                            <input ref={inputRef} id="input" type="text" placeholder="e.g. eggs" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                            <button className="btn-submit" type="submit" onClick={handleSubmit}>{indexEdit >= 0 ? "Edit" : "Submit" }</button>
                        </div>
                        {/* {localStorage.getItem(list)} */}
                        {list.map((item, key) => (
                            <div className="item-list" key={key}>
                                <p className="item-style">
                                    {item.keyValue}
                                </p>
                                <div className="btn-group">
                                    <button className="btn-style">
                                        <Edit className="edit-btn" onClick={() => handleEdit(item.id)}/>
                                    </button>
                                    <button className="btn-style" onClick={() => handleDelete(item.id)}>
                                        <Delete className="delete-btn"/>
                                    </button>
                                    
                                </div>
                            </div>
                            
                        ))}
                        <button className="btn-clear-all" onClick={handleClearAll}>Clear Items</button>
                </>
            
            }
        
            
        </WrapMain>
    )
}
// {list.map((item, key) => (
//     <div className="item-list" key={key}>
//         <p className="item-style">
//             {item.keyValue}
//         </p>
//         <div className="btn-group">
//             <button className="btn-style">
//                 <Edit className="edit-btn" onClick={() => handleEdit(item.id)}/>
//             </button>
//             <button className="btn-style" onClick={() => handleDelete(item.id)}>
//                 <Delete className="delete-btn"/>
//             </button>
            
//         </div>
//     </div>
    
// ))}