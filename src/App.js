import React, { Component } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import './App.css';

import SearchButton from './components/SearchButton/SearchButton';
import Header from './components/Header/Header.js';
import UserForm from './components/UserForm/UserForm';
import Star from './components/Star/Star';
import theme from './components/ThemeProvider/ThemeProvider';
import StudentForm from './components/StudentForm/StudentForm.js';

class App extends Component
{
  constructor(props)
  {
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
      studentList: [],
      open: false,
      githubPhoto: '',
      github_name: '',
    }
  };

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
      })
      .catch(function (error)
      {
        console.log(error);
      });
  }

  componentDidMount()
  {
    this.getStudents();
  }

  addStudent = (newStudent) =>
  {
    console.log('App.js addStudent ', newStudent);
    axios.post('/students', newStudent)
      .then((response) =>
      {
        console.log('post response App.js ', response);
        this.getStudents();
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }

  onClickGitHubPhoto = (github_name) =>
  {
    console.log('onClickGitHubPhoto ', github_name);

    axios.get('/students/photo', {
      params: {
        name: github_name
      }
    })
      .then((response) =>
      {
        console.log('get githubPhoto response App.js ', response.data);
        this.setState({
          githubPhoto: response.data[0].avatar_url,
          github_name: github_name
        })
      })
      .catch(function (error)
      {
        console.log(error);
      })
  }

  deleteStudent = (studentId, githubName) =>
  {
    console.log('deleteStudent ', studentId);
    axios.delete('/students', {
      data: {
      id: studentId
      }
    })
      .then((response) =>
      {
        console.log('delete response from App.js ', response);
        if (githubName === this.state.github_name) {
          this.setState({
            githubPhoto: '',
            github_name: ''
          })
        }
        this.getStudents();
      })
      .catch ((error) =>
      {
        console.log(error);
      })
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

  handleMom = () => this.setState({ open: true });

  handleMomClose = () => this.setState({ open: false });

  render()
  {
    return (
      <ThemeProvider theme={theme}>

        <main className="App">

          <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start">

            <Header />

            {/* <pre>{JSON.stringify(this.state.studentList)}</pre> */}

            <StudentForm addStudent={this.addStudent} studentList={this.state.studentList} onClickGitHubPhoto={this.onClickGitHubPhoto} githubPhoto={this.state.githubPhoto} deleteStudent={this.deleteStudent} />

            <SearchButton handleMom={this.handleMom} />

            <UserForm user={this.state.user} userInputs={this.state.userInputs} handleSubmit={this.handleSubmit} handleChangeFor={this.handleChangeFor} />

            <Star />

          </Grid>

          <Dialog onClose={this.handleMomClose} open={this.state.open}>
            <DialogTitle>...for a pithy Dialog</DialogTitle>
          </Dialog>

        </main>

      </ThemeProvider>
    );
  }
}

export default App;
