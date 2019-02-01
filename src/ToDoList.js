import React from 'react';


const ToDoListForm = (props) => (
      <div className="container m-3">
        <form onSubmit={props.addItem}>
            <div className="form-group" width="70%">
            <label htmlFor="task">Enter your task</label>
            <input type="text" className="form-control form-control-lg" id="task" placeholder="Task" value={props.currentTask.task} onChange={props.handleChangeFor('task')}/>
            <small id="taskHelp" className="form-text text-muted">Add a task to your To Do List</small>
            </div>
            <div className="form-group">
            <label htmlFor="Due Date">Due Date</label>
            <input type="date" className="form-control form-control-lg" id="Due Date" value={props.currentTask.date} onChange={props.handleChangeFor('date')} id="Due Date" />
            </div>
            <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
        </form>

      </div>
    );


export default ToDoListForm;
