import React from 'react'
import StateComponent from './StateComponent'
import  '../style/style.css'
class ToDoItem extends React.Component {
    render() {
        const { id, name, state } = this.props.todo
        return (
            <li key={id} className='ToDoItemContainer'>
                  <div className='upperBar'>{id}</div>
                    <div className="container">
                    
                        <div style={{textDecoration : state==='Complete'? 'line-through':'none'
                    }}>
                            <b> {name}</b>
                        
                        <input type="checkbox" defaultChecked={state==='Complete'? true:false}/>
                        </div>
                    </div>
                        <StateComponent state={state} className='StateClass'/>
                    

            </li>)
    };
}
export default ToDoItem