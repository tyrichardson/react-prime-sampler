import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import StudentList from '../StudentList/StudentList.js';
import TextField from '@material-ui/core/TextField';

class Student
{
  constructor(github = '')
  {
    this.github_name = github;
  }
};

class StudentForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state = new Student();
  }

  handleChange = (e) =>
  {
    this.setState(new Student(e.target.value));
  }

  handleSubmit = (e) =>
  {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.clearStudentFields();
  };

  clearStudentFields = () =>
  {
    this.setState(new Student());
  };

  render()
  {
    return (
      <Grid item xs={12}>

        <div style={{ backgroundColor: "lightblue", padding: 1 + "rem", display: "flex", flexDirection: "row" }}>

          <form onSubmit={this.handleSubmit}
              style={{ padding: 1 + "rem", flexBasis: 30 + '%' }}
          >
            <TextField required onChange={this.handleChange}
                placeholder="GitHub username"
                value={this.state.github_name}
                name="github_name"
            />
            <input type="submit" value="Submit" />
          </form>

          <StudentList studentList={this.props.studentList} onClickGitHubPhoto={this.props.onClickGitHubPhoto} deleteStudent={this.props.deleteStudent} />

          <p style={{ flexBasis: 30 + '%' }}><img src={this.props.githubPhoto} style={{maxWidth: 300, maxHeight: 300}}/></p>

        </div>
      </Grid>
    )
  };
};

StudentForm.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default StudentForm;
