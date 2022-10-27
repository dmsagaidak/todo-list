import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList/ToDoList";

function App() {
  const [entries, setEntries] = useState([
    {entry: 'Buy milk'},
    {entry: 'Walk with dog'},
    {entry: 'Do homework'},
  ])

  const [newEntry, setNewEntry] = useState('')

  const addEntry = () =>{
    if (newEntry){
      let newTask = {entry: newEntry};
      const entriesCopy = [...entries, newTask];
      setEntries(entriesCopy);
      setNewEntry('');
    }
  }

  const deleteEntry = (index: number) => {
    const entriesCopy = [...entries];
    entriesCopy.splice(index, 1);
    setEntries(entriesCopy);
  }

  let entriesList: React.ReactNode = entries.map((entry, index) =>(
    <ToDoList
      entry={entries[index].entry}
      delete={() => deleteEntry(index)}
    >
    </ToDoList>
    ));



  return (
    <div className="App">
      <h1>My list</h1>
      <div>
        <input value={newEntry} onChange={(event) => setNewEntry(event.target.value)} placeholder={'Write a task'}/>
        <button onClick={addEntry}>Add</button>
      </div>
      {entriesList}
    </div>
  );
}

export default App;
