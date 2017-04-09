import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">学生管理系统</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/student/new">添加学生</Link>
              </li>
              <li>
                <Link to="/score">查询成绩单</Link>
              </li>
              <li>
                <Link to="/goodbye">离开系统</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;