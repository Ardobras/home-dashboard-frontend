import React, {Component} from 'react';


export default class Weather extends Component {

  componentDidMount() {
    console.log(this.props.data);
  }

  componentWillUpdate() {
    console.log("update")
  }


  render() {
    return (
      <div className="widget-entity col-sm-4">
        Current Temperature
        <div>{this.props.data.currently ? this.props.data.currently.temperature : 'loading'}</div>
      </div>
    );
  }
};