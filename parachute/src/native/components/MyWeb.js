

import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class MyWeb extends React.Component {
  render() {
    return (
      <View style={{ height: 200}}>
      <WebView
        scrollEnabled = {false}
        source={{uri: 'http://172.20.10.2/'}}
        style={{height: 10, width: 200 }}
      />
      </View>
    );
  }
}
