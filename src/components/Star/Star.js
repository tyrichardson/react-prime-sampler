import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

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
      <Grid item xs={12}>
        <div id="starDiv" style={{ backgroundColor: "cornflowerblue", padding: 1 + "rem" }}>
          {/* <p>star section -- example using an array and map() and the spread operator</p>
          <p>Splat of this.state.starList array: </p>
          <pre>{JSON.stringify(this.state.starList)}</pre > */}

          <Grid item xs={12}>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <TextField name="newStarName"
              placeholder="new star's name"
              value={this.state.newStarInputs.name}
              onChange={this.handleChangeForStar('name')} />
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
          </Grid>
          <Grid item xs={12}>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <TextField name="NewStarDiameter"
              placeholder="diameter of new star"
              value={this.state.newStarInputs.diameter}
              onChange={this.handleChangeForStar('diameter')} />
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
            <StarTwoToneIcon></StarTwoToneIcon>
          </Grid>
          <Grid item xs={12}>
          <Button color="primary"
            size="small" variant="contained" onClick={this.handleNewStar} style={{ margin: 0.5 + "rem" }}>Add New Star
          </Button>
          </Grid>
          <ul>
            {this.state.starList.map(star => <li key={star.name} style={{color: "ivory"}}> The star {star.name} has a diameter of {star.diameter} million miles.
            </li>)}
          </ul>
        </div>
      </Grid>
    )
  }
}

export default Star;
