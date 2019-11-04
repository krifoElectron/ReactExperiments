import React, {Component} from 'react';

import './TaskListItem.css'


class TaskListItem extends Component {
  state = { done: false, important: false };

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   }
  // }

  onLabelClick = () => {
    this.setState(({done}) => {
        return {
        done: !done,
      }
    })
  }

  onImportantButtonClick = () => {
    this.setState(({important}) => {
        return {
          important: !important
        }
    })
  }
  // constructor() {
  //   super();
    
  //   this.onLabelClick = this.onLabelClick.bind(this); 
  // }

  // onLabelClick() {
  //   console.log(this.props.label)
  // }
  
  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'task-list-item';
    
    if (done) {
      classNames += ' done';  
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames  }>
        <span className="task-list-item-label" onClick={this.onLabelClick}>{label}</span>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onImportantButtonClick}>
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
