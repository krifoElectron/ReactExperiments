import React, {Component} from 'react';

import './TaskListItem.css'


class TaskListItem extends Component {
  // state = { done: false, important: false };

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   }
  // }

  // constructor() {
  //   super();
    
  //   this.onLabelClick = this.onLabelClick.bind(this); 
  // }

  // onLabelClick() {
  //   console.log(this.props.label)
  // }
  
  render() {
    const { label, done, important, onDeleted, onChangeImportant, onChangeDone } = this.props;
    // const {  } = this.state;

    let classNames = 'task-list-item';
    
    if (done) {
      classNames += ' done';  
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames  }>
        <span className="task-list-item-label" onClick={onChangeDone}>{label}</span>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onChangeImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
  
      </span>
    );
  }
}

export default TaskListItem;
