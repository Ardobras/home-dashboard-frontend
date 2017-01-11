import React, {Component} from 'react';
import io from 'socket.io-client';

import Weather from './components/weather'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {on: () => {}}
    };
  }

  componentDidMount() {
    var socket = io('http://localhost:3001/');
    socket.on('weather', (data) => {
      this.setState({weather: data})
    })
  }

  render() {
    return (
      <div className="widget-wrap">
        <Weather data={this.state.weather} />
      </div>
    );
  }
}