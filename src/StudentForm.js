import React, {Component} from 'react';
import './StudentForm.css';

class StudentForm extends Component{
  getInitialState() {
    return {
      name:'',
      studentNumber:'',
      nation:'',
      classNumber:'',
      math:0,
      chinese:0,
      english:0,
      program:0
    };
  }

  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>请输入学生信息</h2>
          <div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">姓名: </span>
              <input className="form-control" name="name" type="text"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">学号: </span>
              <input className="form-control" name="stuNumber" type="text"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">民族: </span>
              <input className="form-control" name="nation" type="text"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">班级: </span>
              <input type="text" name="classNumber" className="form-control"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">数学成绩: </span>
              <input name="math" type="number" max="100" min="0" className="form-control"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">语文成绩: </span>
              <input name="chinese" type="number" max="100" min="0" className="form-control"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">英语成绩: </span>
              <input name="english" type="number" max="100" min="0" className="form-control"/>
            </div>
            <div className="input-group col-lg-6 div-center">
              <span className="input-group-addon">编程成绩: </span>
              <input name="program" type="number" max="100" min="0" className="form-control"/>
            </div>
            <div id="msg" className="alert alert-info"><span></span></div>
            <div>
              <button className="btn btn-success" onClick="addStudent()">添加</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentForm;