import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class StudentList extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div id="StudentList">
        <Grid container>
          <Grid item xs={12}>
            <p>Github User Name</p>
          </Grid>
        </Grid>
        <Grid container>
          {this.props.studentList.map(student => <Grid item xs={12} key={student.id}>{student.github_name}</Grid>)}
        </Grid>

      </div>

    )
  }

}

export default StudentList;
