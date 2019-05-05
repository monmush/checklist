import React from 'react'

const Todos = ({items, deleteItems})=>{
    const todoList = items.map(item=>{
        return(
            <div className="todo-collection" key={item.id}>
                <span onClick={()=>{deleteItems(item.id)}}>{item.content}</span>
            </div>
        )
    })
    return(
        <div className="todo-list">
            {todoList}
        </div>
    )
}

export default Todos;
