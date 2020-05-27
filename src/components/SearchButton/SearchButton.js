import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Call } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';


class SearchButton extends Component
{
  render()
  {
    return (

      <Grid item xs={12}>
        <div style={{ backgroundColor: "pink" }}>

          <Button color="primary" onClick={this.props.handleMom}>
            <Call />
              Phone home
          </Button>

        </div>
      </Grid>
    )
  }
}

export default SearchButton;
