import React from 'react';

import './AppHeader.css'

const AppHeader = ({more, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>My Task List</h1> 
      <h2>{more} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
