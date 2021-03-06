import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ScoreFrom extends Component {

  studentHTML = students => {
    return students.map(student => (
      <tr key={student.stuNumber}>
        <td>{student.name}</td>
        <td>{student.stuNumber}</td>
        <td>{student.nation}</td>
        <td>{student.subject.math}</td>
        <td>{student.subject.chinese}</td>
        <td>{student.subject.english}</td>
        <td>{student.subject.program}</td>
        <td>{student.subject.average}</td>
        <td>{student.subject.total}</td>
      </tr>
    ));
  };

  classHTML = function (classes) {
    return classes.map(clazz => (
      <div key={clazz.classNumber} className="panel panel-success">
        <div className="panel-heading">班级: <span>{clazz.classNumber}</span></div>
        <div className="panel-body">
          <div>
            <table className="table">
              <thead>
              <tr>
                <th>姓名</th>
                <th>学号</th>
                <th>民族</th>
                <th>数学成绩</th>
                <th>语文成绩</th>
                <th>英语成绩</th>
                <th>编程成绩</th>
                <th>平均分</th>
                <th>总分</th>
              </tr>
              </thead>
              <tbody>
              {this.studentHTML(clazz.students)}
              </tbody>
            </table>
          </div>
          <div>
            <table className="table">
              <thead>
              <tr>
                <th>班级总分平均分</th>
                <th>班级总分中位数</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{clazz.average}</td>
                <td>{clazz.median}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    let showHtml = '';
    if (this.props.classes.length === 0) {
      showHtml = <h3 className="text-center">没有学生信息</h3>;
    } else {
      showHtml = this.classHTML(this.props.classes);
    }
    return (
      <div className="container">
        {showHtml}
      </div>
    );
  }
}

export default ScoreFrom;