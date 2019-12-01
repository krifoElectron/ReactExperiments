import React, {Component} from 'react';

import './ItemStatusFilter.css'


class ItemStatusFilter extends Component {
  buttons = [
    {name: 'All'},
    {name: 'Active'},
    {name: 'Done'}
  ];

  render() {
    const { selector, statusFilterHandler } = this.props;

    const buttons = this.buttons.map(({ name }) => {
      const isActive = name === selector;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return <button type="button"
                     className={`btn ${clazz}`}
                     onClick={() => statusFilterHandler(name)}
                     key={name}
        >{name}</button>
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

export default ItemStatusFilter;
