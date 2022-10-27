import React, {useState} from 'react';
import './App.css';
import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm"

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

  const entriesList: React.ReactNode = entries.map((entry, index) =>(
    <Task
      entry={entries[index].entry}
      delete={() => deleteEntry(index)}
    >
    </Task>
    ));



  return (
    <div className="App">
      <h1>My list</h1>
      <AddTaskForm
        newTask={newEntry}
        onTaskChange={(event) => setNewEntry(event.target.value)}
        onTaskAdd={addEntry}>

      </AddTaskForm>

      {entriesList}
    </div>
  );
}

export default App;
