import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class UserForm extends Component
{
  render()
  {
    return (
      <Grid item xs={12}>
      <div id="formDiv" style={{ backgroundColor: "lightgreen", padding: 1 + "rem" }}>
        <form>
          <p>Current value: {this.props.user.name}</p>
          <TextField value={this.props.userInputs.name}
            placeholder="name"
            onChange={this.props.handleChangeFor('name')} />
          <p>Current value: {this.props.user.city}</p>
          <TextField value={this.props.userInputs.city}
            placeholder="city"
            onChange={this.props.handleChangeFor('city')} />
          <p>You typed: {this.props.userInputs.name} |  {this.props.userInputs.city}</p>
          <Button color="secondary" size="small" variant="contained" onClick={this.props.handleSubmit}>Submit</Button>
        </form>
      </div>
      </Grid>
    )
  }
}

export default UserForm;
