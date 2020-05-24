import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Output extends Component
{
  constructor(props)
  {
    super(props);
      this.state = {
        output: { typing: ''}
      }
    }

    onOutputChange = e =>
  {
    this.setState({ output: { typing: e.target.value } });
    console.log(e.target.value);
  }

  render()
  {
    return (
      <div id="outputDiv" style={{marginTop:.5 + 'rem'}}>
        <TextField variant="outlined" placeholder="output to console" size="small" onChange={this.onOutputChange} />
        <br /><br />
      </div>
    )
  }
}

export default Output;
