import React, { Component } from 'react';

import './AddForm.css';

export default class AddForm extends Component {
  state = {
    label: ''
  }

  onLabelCange = (event) => {
    this.input = event.target;
    this.setState({label: this.input.value});
  }

  onSendForm = (event) => {
    event.preventDefault();

    const { label } = this.state;
    const { onAdd } = this.props;

    if (label !== '') {
      onAdd(label);

      this.setState({label: ''})
    }
  }

  render() {
    const { label } = this.state;

    return ( 
      <form className="add-form d-flex" onSubmit={this.onSendForm}>
        <input className="form-control"
               placeholder="чё ещё нужно сделать"
               type="text"
               onChange={this.onLabelCange}
               value={label}
        />
        <button
          type="button"
          className="btn btn-outline-secondary float-right"
        >addItem
        </button>
      </form>
    );
  }
}
