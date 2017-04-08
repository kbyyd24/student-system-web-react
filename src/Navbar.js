import React, {Component} from 'react';

class Navbar extends Component{
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header"><a href="/" className="navbar-brand">学生管理系统</a></div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/student/new">添加学生</a></li>
              <li><a href="/score">查询成绩单</a></li>
              <li><a href="/goodbye">离开系统</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;