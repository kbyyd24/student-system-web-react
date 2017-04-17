import React, {Component} from 'react';

class Score extends Component{

  constructor(props) {
    super(props);
    this.state = {classes: []};
  }

  componentWillMount() {
    const requestInit = {
      method: 'GET',
      mode: 'cors'
    };
    const request = new Request('http://localhost:4000/classes', requestInit);
    fetch(request)
      .then(response => response.json())
      .then(classes => {
        this.state.classes = classes;
      });
  }

  render() {
    return (
      <div className="container">
        <div className="input-group col-lg-6 div-center">
          <input type="text" id="stuNumbers" className="form-control"/>
          <div className="input-group-btn">
            <button className="btn btn-primary">搜索</button>
          </div>
          <div className="input-group-btn">
            <button className="btn btn-block">清空过滤</button>
          </div>
        </div>
        <div>
          <div id="classes"></div>
        </div>
      </div>
    );
  }
}

export default Score;