import React from 'react';


interface AddTaskFormProps extends React.PropsWithChildren {
  newTask: string;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onTaskAdd: React.MouseEventHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <div className="add-task">
      <input value={props.newTask}
      onChange={props.onTaskChange}/>
      <button onClick={props.onTaskAdd}>Add task</button>
    </div>
  );
};

export default AddTaskForm;