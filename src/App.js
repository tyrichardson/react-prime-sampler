import React, { Component } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import SearchButton from './components/SearchButton/SearchButton';
import Header from './components/Header/Header.js';
import UserForm from './components/UserForm/UserForm';
import Star from './components/Star/Star';
import theme from './components/ThemeProvider/ThemeProvider';
import StudentForm from './components/StudentForm/StudentForm.js';
import StudentList from './components/StudentList/StudentList.js';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      user: {
        name: 'Ty',
        city: 'Minneapolis'
      },
      userInputs: {
        name: '',
        city: ''
      },
      studentList: []
    };
  }

  addStudent = (newStudent) =>
  {
    console.log('App.js addStudent ', newStudent);
    axios.post('/students', newStudent)
      .then(function (response)
      {
        console.log('post response App.js ', response);
      })
      .catch(function (error)
      {
        console.log(error);
      })
    this.getStudents();
  }

  componentDidMount()
  {
    this.getStudents();
  }

  getStudents = () =>
  {
    axios.get('/students')
      .then((response) =>
      {
        console.log('get response App.js ', response.data);
        this.setState(
          {
            studentList: response.data
          }
        );
        console.log(`studentList ${this.studentList}`);
      })
      .catch(function (error)
      {
        console.log(error);
      });
  }

  handleChangeFor = propertyName => e =>
  {
    this.setState(
      {
        userInputs: {
          ...this.state.userInputs,
          [propertyName]: e.target.value,
        }
      }
    )
  }

  handleSubmit = e =>
  {
    e.preventDefault();
    this.setState({
      user: { ...this.state.userInputs },
      userInputs: {
        name: '',
        city: ''
      }
    })
  }

  render()
  {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">

          <Header />

          <pre>{JSON.stringify(this.state.studentList)}</pre>

          <StudentForm addStudent={this.addStudent} />

          <StudentList studentList={this.state.studentList} />

          <SearchButton />

          <UserForm user={this.state.user} userInputs={this.state.userInputs} handleSubmit={this.handleSubmit} handleChangeFor={this.handleChangeFor} />

          <Star />

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
