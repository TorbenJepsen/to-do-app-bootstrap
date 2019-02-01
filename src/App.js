import React, { Component } from 'react';
import ToDoList from './ToDoList';
import TaskList from './TaskList';
import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentTask: {
        task: '',
        date: '',
      }
    }
  }

  handleChangeFor = propertyName => event => {
    console.log(this.state.currentTask);
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        [propertyName]: event.target.value,
      }
    
    }
    
    );
  }

  addItem = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        this.state.currentTask,
      ]
    })
    console.log('in add item', this.state.items);
  }

  render() {
    return (
      <div className="container">
      <h1>To Do List</h1>
      <div className="container" margin="50px" padding="50px">
        <ToDoList
        addItem={this.addItem}
        handleChangeFor={this.handleChangeFor}
        currentTask={this.state.currentTask}/>
        </div>
        <div className="container">
        <TaskList items={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;
