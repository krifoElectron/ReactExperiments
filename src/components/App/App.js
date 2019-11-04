import React from 'react';

import AppHeader from '../AppHeader/AppHeader'
import TaskFinder from '../TaskFinder/TaskFinder'
import TaskList from '../TaskList/TaskList'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'

import './App.css'

const App = () => {

  const taskData = [
    {label: 'Drink Coffe', important: false, id: 1},
    {label: 'Learn React', important: true, id: 2},
    {label: 'Make awesome App', important: true, id: 3},
    {label: 'Eat cake', important: false, id: 4},
  ]

  return (
    <div className='container'>
      <AppHeader more={1} done={3}/>
      <div  className="top-panel d-flex">
        <TaskFinder/>
        <ItemStatusFilter/>
      </div>
      <TaskList tasks={taskData}/>
    </div>
  );

}

export default App;