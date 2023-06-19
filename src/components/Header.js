import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { v4 as uuidv4 } from 'uuid';

function Header({todo, setTodo}) {
  
    let [swooshAdd, setSwooshAdd] = useState(false)
    const [value, setValue] = useState()
    
    function addTodo(event) {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
        event.preventDefault()
    }

    return (
    <header>
        <h1>To do list</h1>
       <SiNike className={`button-add ${swooshAdd && 'active'}`} onClick={() => setSwooshAdd(swooshAdd = !swooshAdd)} />

       {swooshAdd && (
        <div className='new-zadacha'>
            <form>
                <h3>Новая задача</h3>
                <input className='zadachka' placeholder='Задача' value={value} onChange={ (e)=> setValue(e.target.value)}/>
                <button type='submit' className='submit' onClick={addTodo}>Прикрепить задачу</button>
            </form>
        </div>
       )}
    </header>
  )
}

export default Header