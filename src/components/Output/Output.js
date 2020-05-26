import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
      <div id="outputDiv"
        style={{ backgroundColor: "peru", padding: 1 + "rem" }}>
        <Grid item xs={12}>
          <TextField variant="outlined"
            placeholder="test output to console"
            size="small"
            onChange={this.onOutputChange} />
        </Grid>
      </div>
    )
  }
}

export default Output;
