import React, {Component} from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Homepage from './Homepage';
import AddStudent from './StudentForm';

class StudentSystem extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Homepage}/>
        <Route path={"/student/new"} component={AddStudent}/>
        {/*<Route path={"/score"} component={Navbar}/>*/}
        {/*<Route path={"/goodbye"} component={Navbar}/>*/}
      </Router>
    )
  }
}
export default StudentSystem;