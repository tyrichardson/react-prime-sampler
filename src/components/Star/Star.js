import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Star extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      starList: [
        { name: 'Fomalhaut', diameter: 1.5925 }, { name: 'Gacrux', diameter: 72.624 }, { name: 'Elnath', diameter: 3.6312 }
      ],
      newStarInputs: {
        name: '',
        diameter: ''
      }
    }
  }

  handleChangeForStar = propertyName => e =>
  {
    if (propertyName === 'name') {
      this.setState(
        {
          newStarInputs: {
            ...this.state.newStarInputs,
            [propertyName]: e.target.value,
          }
        }
      )
    } else {
      this.setState(
        {
          newStarInputs: {
            ...this.state.newStarInputs,
            [propertyName]: parseFloat(e.target.value),
          }
        }
      )
    }
  }

  handleNewStar = () =>
  {
    this.setState(
      {
        starList:
          [...this.state.starList,
          this.state.newStarInputs
          ],
        newStarInputs: {
          name: '',
          diameter: ''
        }
      })
  }

  render()
  {
    return (
      <div id="starDiv">
        <p>star section -- example using an array and map() and the spread operator</p>
        <p>Splat of this.state.starList array: </p>
        <pre>{JSON.stringify(this.state.starList)}</pre>

        <Grid container
          spacing={1}
          justify="center"
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
             <TextField name="newStarName"
              placeholder="new star's name"
              value={this.state.newStarInputs.name}
                  onChange={this.handleChangeForStar('name')} />
          </Grid>
          <Grid item xs={4}>
            <TextField name="NewStarDiameter"
              placeholder="diameter of new star"
              value={this.state.newStarInputs.diameter}
                  onChange={this.handleChangeForStar('diameter')} />
          </Grid>
          <Grid item xs={2}></Grid>
          </Grid>
        <br /> <br />
        <Button color="secondary" size="small" variant="contained" onClick={this.handleNewStar}>Add New Star</Button>
        <ul>
          {this.state.starList.map(star => <li key={star.name}> The star {star.name} has a diameter of {star.diameter} million miles.
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Star;
