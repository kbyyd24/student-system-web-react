import React, {Component} from 'react';
import Navbar from './Navbar';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './Homepage';

class StudentSystem extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path={"/"} component={Homepage}/>
          {/*<Route path={"/student/new"} component={Navbar}/>*/}
          {/*<Route path={"/score"} component={Navbar}/>*/}
          {/*<Route path={"/goodbye"} component={Navbar}/>*/}
        </div>
      </Router>
    )
  }
}
export default StudentSystem;