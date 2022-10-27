import React from 'react';

interface ToDoListProps extends React.PropsWithChildren {
entry: string;
delete: React.MouseEventHandler;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <div className="entry">
      <span>{props.entry}</span>
      <button onClick={props.delete} className="remove-btn">Remove</button>
    </div>
  );
};

export default ToDoList;