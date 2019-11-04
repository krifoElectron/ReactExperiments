import React, {Component} from 'react';

import './TaskListItem.css'


class TaskListItem extends Component {
  render() {
    const {label, important = false} = this.props;

    return (
      <span className={"task-list-item" + (important ? ' task-list-item-important' : '')}>
        <span className="task-list-item-label">{label}</span>
  
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
  
      </span>
    );
  }
}

export default TaskListItem;
