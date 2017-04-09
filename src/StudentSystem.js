import React, {Component} from 'react';
import Navbar from './Navbar';
import {Route, Router, Link} from 'react-router';

class StudentSystem extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router path={"/"} component={Hompage}>
          <Route path={"/addStudent"} component={AddStudent}/>
          <Route path={"/score"} component={Score}/>
          <Route path={"/goodbye"} component={Goodbye}/>
        </Router>
      </div>
    )
  }
}
export default StudentSystem;