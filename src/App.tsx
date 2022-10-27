import React, {useState} from 'react';
import './index.css';
import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm"

function App() {
  const [entries, setEntries] = useState([
    {entry: 'Buy milk', id: 't1'},
    {entry: 'Walk with dog', id: 't2'},
    {entry: 'Do homework', id: 't3'},
  ])

  const [newEntry, setNewEntry] = useState('')

  const addEntry = () =>{
    if (newEntry){
      const randomID = Math.floor(Math.random() * 10000);
      let newTask = {entry: newEntry, id: randomID.toString()};
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
      key={entry.id}
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
