import React from 'react';

interface TaskProps extends React.PropsWithChildren {
entry: string;
id: string;
delete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className="entry">
      <span>{props.entry}</span>
      <span>{props.children}</span>
      <button onClick={props.delete} className="remove-btn">Remove</button>
    </div>
  );
};

export default Task;