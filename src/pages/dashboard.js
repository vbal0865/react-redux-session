import React from 'react'
import TodoForm from './todoForm';
import TodoList from './todoList';


// const Dashboard = () => {
   
//     return (<div>
//         <h1>Dashboard</h1>
//         <TodoList/>
//         <TodoForm/>
//     </div>)
// }
 

// export default Dashboard 

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {noteList:["Introduction to React","introduction to react-redux","introduction to redux-saga"]}
    }

    onNoteAddHandler = (note) => {
        this.setState({noteList:[...this.state.noteList, note]})
    }

    render(){
            return (<div>
        <h1>Dashboard</h1>
        <TodoList noteList = {this.state.noteList}/>
        <TodoForm onNoteAdd = {this.onNoteAddHandler} />
    </div>)
    }
}

export default Dashboard 
