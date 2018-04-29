import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';


var ws =new WebSocket('ws://' + '172.20.10.11' + ':81');

var x = 0;

export default class Blink extends React.Component {
  constructor(props) {

    ws.onmessage = (e) => {

        this.setState({x: parseInt(e.data) });

    };

    super(props);
    this.state = {x: 0 };

  }

  render() {
    return (
      <Text>{this.state.x}</Text>
    );
  }
}
