import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import AddStudent from './StudentForm';

class StudentSystem extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path={"/"} component={Homepage}/>
          <Route path={"/student/new"} component={AddStudent}/>
          {/*<Route path={"/score"} component={Navbar}/>*/}
          {/*<Route path={"/goodbye"} component={Navbar}/>*/}
        </div>
      </Router>
    )
  }
}
export default StudentSystem;