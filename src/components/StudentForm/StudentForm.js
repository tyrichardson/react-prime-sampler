import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          placeholder="GitHub username"
          value={this.state.github_name}
          name="github_name" />
        <input type="submit" value="Submit" />
      </form>
    )
  };
};

StudentForm.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default StudentForm;
