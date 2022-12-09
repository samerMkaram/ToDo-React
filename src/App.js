import logo from './logo.svg';
import './App.css';
import TodoList from './component/ToDoList'
function App() {
  // const ContactList=(props)=>{
  //   const people = props.contacts
  //   return (<ol>
  //     {people.map((e)=>(<li key={e.name}> {e.name}</li>))}
  //   </ol>)
  // }
  return (
    <div className="App">
        {/* <ContactList contacts={[{'name':'samer'},{'name':'mirna'}]}/> */}
        <TodoList />
    </div>
  );
}

export default App;
