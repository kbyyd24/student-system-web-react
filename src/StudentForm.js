import React, {Component} from 'react';
import './StudentForm.css';
import InputItem from './InputItem';

class StudentForm extends Component {
  static defaultProps = (function () {
    const name = new InputItem('姓名: ', '', 'text');
    const studentNumber = new InputItem('学号: ', '', 'text');
    const nation = new InputItem('民族: ', '', 'text');
    const classNumber = new InputItem('班级: ', '', 'text');
    const math = new InputItem('数学成绩: ', NaN, 'number');
    const chinese = new InputItem('语文成绩: ', NaN, 'number');
    const english = new InputItem('英语成绩: ', NaN, 'number');
    const program = new InputItem('编程成绩: ', NaN, 'number');
    return {inputs: [name, studentNumber, nation, classNumber, math, chinese, english, program]};
  }());

  render() {
    const inputItems = this.props.inputs.map(inputItem => (
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
              <button className="btn btn-success">添加</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentForm;