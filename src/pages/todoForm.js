import React from 'react'


// const TodoForm = () => {
//     return <input/>
// }
 
// export default TodoForm

class TodoForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {noteToAdd : ""}
        
    }

    onInputChange = (event) => {
        // console.log(event.target.value)
        this.setState({noteToAdd:event.target.value})

    }

    onclickHandler = () => {
        this.props.onNoteAdd(this.state.noteToAdd)
        this.setState({noteToAdd:""})
        console.log(this.state.noteToAdd)
    }

    render(){ 
        return (<div>
            <input value = {this.state.noteToAdd} onChange={this.onInputChange}/>
            <button  onClick = {this.onclickHandler}>Add note</button>
                value of the input : {this.state.noteToAdd}
            </div>)
    }
}

export default TodoForm