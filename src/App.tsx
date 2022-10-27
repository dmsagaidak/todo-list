import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList/ToDoList";

function App() {
  const [entries, setEntries] = useState([
    {entry: 'Buy milk'},
    {entry: 'Wash car'},
    {entry: 'Do homework'},
  ])

  const [newEntry, setNewEntry] = useState('')

  const addEntry = () =>{
    if (newEntry){
      let newTask = {entry: ''};
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

  return (
    <div className="App">
      <h1>My list</h1>
      <div>
        <input value={newEntry} onChange={(event) => setNewEntry(event.target.value)} placeholder={'Write a task'}/>
        <button onClick={addEntry}>Add</button>
      </div>

      <ToDoList entry={entries[0].entry}
                delete={() => deleteEntry(0)}
      />
      <ToDoList entry={entries[1].entry}
                delete={() => deleteEntry(1)}
      />
      <ToDoList entry={entries[2].entry}
                delete={() => deleteEntry(2)}
      />
    </div>
  );
}

export default App;
