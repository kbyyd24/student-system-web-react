import React, {Component} from 'react';
import './StudentForm.css';
import InputItem from './InputItem';

class StudentForm extends Component {

  constructor(props) {
    super(props);
    const name = new InputItem('姓名: ', undefined, 'text');
    const studentNumber = new InputItem('学号: ', undefined, 'text');
    const nation = new InputItem('民族: ', undefined, 'text');
    const classNumber = new InputItem('班级: ', undefined, 'text');
    const math = new InputItem('数学成绩: ', undefined, 'number');
    const chinese = new InputItem('语文成绩: ', undefined, 'number');
    const english = new InputItem('英语成绩: ', undefined, 'number');
    const program = new InputItem('编程成绩: ', undefined, 'number');
    this.status = {inputs: [name, studentNumber, nation, classNumber, math, chinese, english, program]};
  }

  submitStudent = () => {
    const studentForm = [...document.getElementsByTagName('input')]
      .map(element => ({[element.name]: element.value}))
      .reduce((acc, next) => Object.assign(acc, next), {});
    console.log(studentForm)
  };

  render() {
    const inputItems = this.status.inputs.map(inputItem => (
      <div key={inputItem.name} className="input-group col-lg-6 div-center">
        <span className="input-group-addon">{inputItem.name}</span>
        <input type={inputItem.type} value={inputItem.value} className="form-control"/>
      </div>
    ));
    return (
      <div>
        <div className="container text-center">
          <h2>请输入学生信息</h2>
          <div>
            {inputItems}
            <div id="msg" className="alert alert-info"><span/></div>
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