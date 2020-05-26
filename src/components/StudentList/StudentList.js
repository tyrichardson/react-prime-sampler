import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class StudentList extends Component
{
  render()
  {
    return (
      <div id="StudentList"
        style={{ backgroundColor: "lightblue", padding: 1 + "rem", flexBasis: 30 + '%' }}>

        {this.props.studentList.map(student => <table style={{ width: 100 + '%', }}><tbody><tr key={student.id}>
          <td><HighlightOffIcon fontSize="small" onClick={() => { this.props.deleteStudent(student.id, student.github_name) }}/>
          </td>
          <td style={{width: 12 + 'rem', textAlign: "left" }}>{student.github_name}
          </td>
          <td style={{width: 7 + 'rem'}}><Button color="primary" size="small" onClick={() => { this.props.onClickGitHubPhoto(student.github_name) }}>github photo</Button>
          </td>
        </tr></tbody></table>)}

      </div>
    )
  }

}

export default StudentList;
