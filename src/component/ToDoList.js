import React from "react";
import ToDoItem from "./ToDoItem";
import '../style/style.css'

const ToDoListItems = [
    {
        id: 1,
        name: 'Mission1',
        state: 'Pending'
    },
    {
        id: 2,
        name: 'Mission2',
        state: 'Complete'
    },
    {
        id: 3,
        name: 'Mission3',
        state: 'InProg'
    },
    {
        id: 4,
        name: 'Mission4',
        state: 'Cancelled'
    },
    {
        id: 5,
        name: 'Mission5',
        state: 'Complete'
    },
];

class ToDoList extends React.Component {
    render() {
        return (
        <div className="ToDoList"><ul className='todo-list-container'>
            {ToDoListItems.map(
                (item) => (
                    <ToDoItem todo={item} key={item.id} />
                ))
            }
        </ul>
        </div>
        );
    }
}
export default ToDoList