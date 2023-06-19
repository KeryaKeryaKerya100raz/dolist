import React from 'react'

function Active({ todo, setTodo }) {
  
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }
  
    function editTodo(){

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

    return (
    <div>
        <h3>Nado mutitsa</h3>
        {
            todo.map( item => (
                <div key={item.id}>
                <div>{item.title}</div>
                <button onClick={ ()=>deleteTodo(item.id) }>Удалить</button>
                <button onClick={ ()=>editTodo(item.id)}>Редактировать</button>
                <button onClick={ ()=>uraTodo(item.id)}>Выполнено/Не выполнено</button>
                </div>
            ))
        }
    </div>
  )
}

export default Active