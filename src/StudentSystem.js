import React, {Component} from 'react';
import Navbar from './Navbar';
import {Route, BrowserRouter as Router} from 'react-router-dom';

class StudentSystem extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          {/*<Route path={"/student/new"} component={Navbar}/>*/}
          {/*<Route path={"/score"} component={Navbar}/>*/}
          {/*<Route path={"/goodbye"} component={Navbar}/>*/}
        </div>
      </Router>
    )
  }
}
export default StudentSystem;