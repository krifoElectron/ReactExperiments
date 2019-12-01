import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TaskFinder from '../TaskFinder/TaskFinder';
import TaskList from '../TaskList/TaskList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddForm from '../AddForm/AddForm';

import './App.css';

class App extends Component {
  currentId = 0;

  state = {
    taskData: [
      this.createTaskItem('Drink Coffee'),
      this.createTaskItem('Learn React'),
      this.createTaskItem('Make awesome App'),
      this.createTaskItem('Eat cake')
    ],
    searchRow: '',
    selector: 'All'
  };

  createTaskItem(label) {
    return {label, done: false, important: false, id: this.currentId++}
  };

  onDeleted = (id)  => {
    this.setState(({taskData}) => {
      const del_id = taskData.findIndex((elem) => elem.id === id);
      const newTaskData = [...taskData.slice(0, del_id), ...taskData.slice(del_id + 1)]
      return {taskData: newTaskData}
    })
  };

  onAdd = (taskText) => {
    this.setState(({taskData}) => {
      const newTaskData = [...taskData, this.createTaskItem(taskText)]
      return {taskData: newTaskData}
    })
  };

  propertyToggle(odlList, property, id) {
    const change_id = odlList.findIndex((elem) => elem.id === id);
    const oldItem = odlList[change_id];
    // changedItem.important = !changedItem.important;
    const changedItem = { ...oldItem, [property]: !oldItem[property]};
    return [...odlList.slice(0, change_id), changedItem, ...odlList.slice(change_id + 1)]
  }

  onChangeImportant = (id) => {
    this.setState(({taskData}) => {
      return {taskData: this.propertyToggle(taskData, 'important', id)}
    })
  };

  onChangeDone = (id) => {
    this.setState(({taskData}) => {
      return {taskData: this.propertyToggle(taskData, 'done', id)}
    });
  };

  searchHandler = (item) => {
    this.setState({ searchRow: item })
  };

  statusFilterHandler = (selector) => {
    this.setState({ selector: selector })
  };


  searchData(taskData, searchRow) {
    if (searchRow === '') {
      return taskData;
    }

    return taskData.filter((value) => {
      const label = value.label.toLowerCase();
      return label.includes(searchRow.toLowerCase());
    });
  };

  selectData (taskData, selector) {
    switch (selector) {
      case 'All':
        return taskData;
      case 'Active':
        return taskData.filter((element) => !element.done);
      case 'Done':
        return taskData.filter((element) => element.done);
      default:
        return taskData;
    }
  }

  render() {
    const { taskData, searchRow, selector } = this.state;
    let visibleData = this.searchData(taskData, searchRow);
    visibleData = this.selectData(visibleData, selector);

    const amount_done = visibleData.reduce((prev, curr) => {
      if (curr.done) {
        prev += 1;
      }
      return prev
    }, 0);

    return (
      <div className='task-app'>
        <AppHeader more={visibleData.length - amount_done} done={amount_done}/>
        <div  className="top-panel d-flex">
          <TaskFinder searchHandler={this.searchHandler}/>
          <ItemStatusFilter selector={selector} statusFilterHandler={this.statusFilterHandler}/>
        </div>
        <TaskList tasks={visibleData}
          onDeleted={this.onDeleted}
          onChangeImportant={this.onChangeImportant}
          onChangeDone={this.onChangeDone} />
        <AddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
