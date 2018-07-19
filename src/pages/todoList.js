import React from 'react'


const TodoList = (props) => {
    console.log(props)
    const todoItems  = props.noteList.map((todoItem,index) => {
        return <h5 key = {index}>{todoItem}</h5>

    })
    return (
        <div>
            {todoItems}
        </div>
    )
}
 

export default TodoList