


import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { Actions } from 'react-native-router-flux';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
  Animated,
  Alert,
  Easing,
TextInput,
Text,

} from 'react-native';


export default class Heart extends Component {





  render() {

    return (
      <View  style={[styles.heart]}>
               <View style={styles.leftHeart} />
               <View style={styles.rightHeart} />
           </View>
    );
  }
}




const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
  },
  leftHeart: {
    transform: [
        {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
        {rotate: '45deg'}
    ],
    right: 5
  },
});
