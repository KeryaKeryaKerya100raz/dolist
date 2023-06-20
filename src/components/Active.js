
import React, { useState } from 'react';

function Active({ todo, setTodo }) {
  
   const [edit, setEdit] = useState(null)
   const [value, setValue] = useState('')
   
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }
  
    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function uraTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)

    }

    function saveTodo(id) {
        let newTodo = [...todo].map( item => {
            if (item.id == id ) {
            item.title = value
            }
            return item
        })
            setTodo(newTodo)
            setEdit(null)
    }

    return (
    <div>
        <h3>Nado mutitsa</h3>
        {
            todo.map( item => (
                <div key={item.id}>
                    {
                        edit == item.id ? 
                            <div>
                                <input onChange={(e) => setValue(e.target.value)} value={value} />
                            </div>
                                :
                            <div>{ item.title}</div>
                    }

                    {
                        edit == item.id ?
                            <div><button onClick={() => saveTodo(item.id)} >Готово</button></div>
                            :
                            <div>
                                <button onClick={ ()=>deleteTodo(item.id) }>Удалить</button>
                                <button onClick={ ()=>editTodo(item.id, item.title)}>Редактировать</button>
                                <button onClick={ ()=>uraTodo(item.id)}>Выполнено/Не выполнено</button>
                            </div>
                    }
                   
                    
                </div>
            ))
        }
    </div>
  )
}

export default Active