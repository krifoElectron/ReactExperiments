import React from 'react';

import TaskListItem from '../TaskListItem/TaskListItem';

import './TaskList.css';

const TaskList = ({tasks, onDeleted}) => {  
  return (
  <ul className="list-group task-list">
    {tasks.map((item) => {
      const {id, ...rest} = item;
      return (
        <li key={id} className="list-group-item"><TaskListItem {...rest} onDeleted={() => onDeleted(id)}/></li>
      );
  })}
  </ul>
  );
}

export default TaskList;
