import React from 'react';

export default class TaskFinder extends React.Component {
  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.input = event.target;
    this.setState({label: this.input.value});

    const { searchHandler } = this.props;

    searchHandler(this.input.value);
  };

  render() {
    const { label } = this.state;

    return (
          <input className="form-control search-input"
                 placeholder="search"
                 type="text"
                 onChange={this.onLabelChange}
                 value={label}
          />
    );
  };
}
