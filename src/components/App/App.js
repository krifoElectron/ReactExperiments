import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TaskFinder from '../TaskFinder/TaskFinder';
import TaskList from '../TaskList/TaskList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';

class App extends Component {
  state = {
    taskData: [
      {label: 'Drink Coffe', id: 1},
      {label: 'Learn React', id: 2},
      {label: 'Make awesome App', id: 3},
      {label: 'Eat cake', id: 4},
    ]
  }

  onDeleted = (id)  => {
    this.setState(({taskData}) => {
      const del_id = taskData.findIndex((elem) => elem.id === id);
      const newTaskData = [...taskData.slice(0, del_id), ...taskData.slice(del_id + 1)]
      return {taskData: newTaskData}
    })
    
  }

  render() {
    const { taskData } = this.state;

    return (
      <div className='task-app'>
        <AppHeader more={1} done={3}/>
        <div  className="top-panel d-flex">
          <TaskFinder/>
          <ItemStatusFilter/>
        </div>
        <TaskList tasks={taskData} onDeleted={this.onDeleted}/>
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