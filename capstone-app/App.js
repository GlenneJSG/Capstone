
  import React, { Component } from 'react';
  import { AppRegistry, Image } from 'react-native';

  export default class Parachute extends Component {
    render() {
      let pic = {
        uri: 'http://www.lanouvelle.net/content/dam/tc/la-nouvelle-union/images/2017/5/1/act-paramedics-1.JPG.imgtransform/ELRH/image.jpg'
      };
      return (
        <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 400, height: 300}}/>
      );
    }
  }
