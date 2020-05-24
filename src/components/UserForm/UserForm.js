import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';

class UserForm extends Component
{
  render()
  {
    return (
      <div id="formDiv">
        <p>user form</p>
        <form>
          <TextField value={this.props.userInputs.name}
            placeholder="name"
            onChange={this.props.handleChangeFor('name')} />
          <p>Default/current value: {this.props.user.name}</p>
          <p>You typed: {this.props.userInputs.name}</p>
          <TextField value={this.props.userInputs.city}
            placeholder="city"
            onChange={this.props.handleChangeFor('city')} />
          <p>Oh--from {this.props.userInputs.city}, huh?</p>
          <p>Default/current value: {this.props.user.city}</p>
          <Button color="secondary" size="small" variant="contained" onClick={this.props.handleSubmit}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default UserForm;
