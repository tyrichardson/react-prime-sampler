import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Search, Call } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

class SearchButton extends Component {
  render() {
    return (
      <div>
        <p>botton with logo and text examples</p>
        <Grid container spacing={1} justify="center">

          <Grid item xs={6}>
            <Button color="primary">
              <Search />
                Search
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button color="primary">
              <Call />
                Your Mom
            </Button>
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default SearchButton;
