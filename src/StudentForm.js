import React, {Component} from "react";
import "./StudentForm.css";
import InputItem from "./InputItem";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StudentForm extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, StudentForm.getClearInputs(), {result: ''});
  }

  static getClearInputs() {
    const name = new InputItem('姓名: ', undefined, 'text', 'name');
    const stuNumber = new InputItem('学号: ', undefined, 'text', 'stuNumber');
    const nation = new InputItem('民族: ', undefined, 'text', 'nation');
    const classNumber = new InputItem('班级: ', undefined, 'text', 'classNumber');
    const math = new InputItem('数学成绩: ', undefined, 'number', 'math');
    const chinese = new InputItem('语文成绩: ', undefined, 'number', 'chinese');
    const english = new InputItem('英语成绩: ', undefined, 'number', 'english');
    const program = new InputItem('编程成绩: ', undefined, 'number', 'program');
    return {inputs: [name, stuNumber, nation, classNumber, math, chinese, english, program]};
  }

  submitStudent = () => {
    const studentForm = this.state.inputs
      .reduce((acc, next) => {
        acc[next.paramName] = next.value;
        return acc;
      }, {});
    let headers = new Headers({'Content-Type': 'application/json'});
    const requestInit = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(studentForm),
      headers
    };
    let addStudentReq = new Request('http://localhost:4000/student/new', requestInit);
    fetch(addStudentReq)
      .then(response => response.json())
      .then(body => {
        [...document.getElementsByTagName('input')]
          .forEach(inputEl => inputEl.value = '');
        let partialState = Object.assign({}, StudentForm.getClearInputs(), {result: body.msg});
        this.setState(partialState);
      })
  };

  handleInput = (e) => {
    let input = this.state.inputs.find(inputItem => inputItem.paramName === e.target.name);
    input.value = e.target.value;
    this.setState(this.state);
  };

  render() {
    const inputItems = this.state.inputs.map(inputItem => (
      <div key={inputItem.name} className="input-group col-lg-6 div-center">
        <span className="input-group-addon">{inputItem.name}</span>
        <input type={inputItem.type} value={inputItem.value} onChange={this.handleInput} name={inputItem.paramName} className="form-control"/>
      </div>
    ));
    return (
      <div>
        <div className="container text-center">
          <h2>请输入学生信息</h2>
          <div>
            {inputItems}
            { this.state.result &&
              <div id="msg" className="alert alert-info"><span>{this.state.result}</span></div>
            }
            <div>
              <button className="btn btn-success" onClick={this.submitStudent}>添加</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentForm;