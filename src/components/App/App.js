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
      this.createTaskItem('Drink Coffe'),
      this.createTaskItem('Learn React'),
      this.createTaskItem('Make awesome App'),
      this.createTaskItem('Eat cake')
    ]
  }
  
  createTaskItem(label) { 
    return {label, done: false, import: false, id: this.currentId++}
  }

  onDeleted = (id)  => {
    this.setState(({taskData}) => {
      const del_id = taskData.findIndex((elem) => elem.id === id);
      const newTaskData = [...taskData.slice(0, del_id), ...taskData.slice(del_id + 1)]
      return {taskData: newTaskData}
    }) 
  }
 
  onAdd = (taskText) => {
    this.setState(({taskData}) => {
      const newTaskData = [...taskData, this.createTaskItem(taskText)]
      return {taskData: newTaskData}
    }) 
  }

  propertyToggle(odlList, property, id) {
    const chage_id = odlList.findIndex((elem) => elem.id === id);
    const oldItem = odlList[chage_id];
    // changedItem.important = !changedItem.important;
    const changedItem = { ...oldItem, [property]: !oldItem[property]};
    return [...odlList.slice(0, chage_id), changedItem, ...odlList.slice(chage_id + 1)]
  }

  onChangeImportant = (id) => {
    this.setState(({taskData}) => {
      return {taskData: this.propertyToggle(taskData, 'important', id)}
    })
  }

  onChangeDone = (id) => {
    this.setState(({taskData}) => {
      return {taskData: this.propertyToggle(taskData, 'done', id)}
    });
  }

  render() {
    const { taskData } = this.state;

    const amount_done = taskData.reduce((prev, curr) => {
      if (curr.done) {
        prev += 1;
      }
      return prev
    }, 0)

    return (
      <div className='task-app'>
        <AppHeader more={taskData.length - amount_done} done={amount_done}/>
        <div  className="top-panel d-flex">
          <TaskFinder/>
          <ItemStatusFilter/>
        </div>
        <TaskList tasks={taskData}
          onDeleted={this.onDeleted}
          onChangeImportant={this.onChangeImportant}
          onChangeDone={this.onChangeDone} />
        <AddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

// const App = () => {

//   let taskData = [
//     {label: 'Drink Coffe', id: 1},
//     {label: 'Learn React', id: 2},
//     {label: 'Make awesome App', id: 3},
//     {label: 'Eat cake', id: 4},
//   ]

//   return (
//     <div className='task-app'>
//       <AppHeader more={1} done={3}/>
//       <div  className="top-panel d-flex">
//         <TaskFinder/>
//         <ItemStatusFilter/>
//       </div>
//       <TaskList tasks={taskData} onDeleted={ (id) => {console.log(id); ; delete taskData[id - 1];}}/>
//     </div>
//   );
// }

export default App;