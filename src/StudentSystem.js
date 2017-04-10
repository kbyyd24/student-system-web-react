import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import AddStudent from './StudentForm';
import Score from './Score';
import Goodbye from './Goodbye';

class StudentSystem extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path={"/"} component={Homepage}/>
          <Route path={"/student/new"} component={AddStudent}/>
          <Route path={"/score"} component={Score}/>
          <Route path={"/goodbye"} component={Goodbye}/>
        </div>
      </Router>
    )
  }
}
export default StudentSystem;