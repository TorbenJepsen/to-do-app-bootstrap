import React, { Component } from 'react';

class TaskList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         items: [
    //             {
    //                 task: 'Take out trash',
    //                 date: '1/31/19',
    //             },
    //             {
    //                 task: 'Do Laundry',
    //                 date: '2/5/19',
    //             },
    //             {
    //                 task: 'Walk dog',
    //                 date: '2/08/19',
    //             }, 
    //             {
    //                 task: 'Buy Groceries',
    //                 date: '2/10/19',
    //             },
    //         ],

    //     }
    // }


    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Due</th>
                        <th scope="col">Completed?</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(task => 
                    <tr key={task.date}>
                    <td>{task.task}</td>
                    <td>{task.date}</td>
                    <td><input type="checkbox"></input></td>
                    <td><button type="button" className="btn btn-secondary btn-small">Edit</button></td>
                    <td><button type="button" className="btn btn-danger btn-small">Delete Task</button></td>
                    </tr>)}
                </tbody>
                </table>

            </div>
        );
    }
}

export default TaskList;
