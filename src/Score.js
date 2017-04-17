import React, {Component} from 'react';
import ScoreForm from "./ScoreForm";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Score extends Component{

  constructor(props) {
    super(props);
    this.state = {classes: []};
  }

  componentWillMount() {
    this.loadClasses();
  }

  loadClasses() {
    const requestInit = {
      method: 'GET',
      mode: 'cors'
    };
    const request = new Request('http://localhost:4000/classes', requestInit);
    this.updateState(request);
  }

  filterStudent = () => {
    let elementById = document.getElementById('stuNumbers');
    let stuNumbers = elementById.value;
    const requestInit = {
      method: 'GET',
      mode: 'cors'
    };
    const request = new Request(`http://localhost:4000/score/filter?stuNumbers=${stuNumbers}`, requestInit);
    this.updateState(request);
  };

  clearFilter = () => {
    this.loadClasses();
  };

  updateState(request) {
    fetch(request)
      .then(response => response.json())
      .then(classes => {
        this.setState({classes});
      });
  }

  render() {
    return (
      <div className="container">
        <div className="input-group col-lg-6 div-center">
          <input type="text" id="stuNumbers" className="form-control"/>
          <div className="input-group-btn">
            <button onClick={this.filterStudent} className="btn btn-primary">搜索</button>
          </div>
          <div className="input-group-btn">
            <button onClick={this.clearFilter} className="btn btn-block">清空过滤</button>
          </div>
        </div>
        <div>
          <div id="classes">
            <ScoreForm classes={this.state.classes}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;