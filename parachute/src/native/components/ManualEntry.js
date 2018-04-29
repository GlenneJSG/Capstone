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


import { Container, Content, Item, Label, Form, Input, Button } from 'native-base';
import UserInput from './UserInput';
import Wallpaper from './Wallpaper';
import ButtonEnter from './ButtonEnter';
import SignupSection from './SignupSection';
import hcnImg from '../images/hashtag.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';
import Logo from './Logo';
import Heart from './Heart';




import spinner from '../images/loading.gif';


const MARGIN = 40;


export default class ManualEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hcn: '',
      isLoading: false,
    };


    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }


_onPress() {
  if (this.state.isLoading) return;

  this.setState({isLoading: true});
  Animated.timing(this.buttonAnimated, {
    toValue: 1,
    duration: 200,
    easing: Easing.linear,
  }).start();

  setTimeout(() => {
    this._onGrow();
  }, 2000);

  setTimeout(() => {
    var healthCardNumber=this.state.hcn;

     var healthCardString = healthCardNumber.toString();

    Actions.recipe({ match: { params: { id:healthCardString} } });
    this.setState({isLoading: false});
    this.buttonAnimated.setValue(0);
    this.growAnimated.setValue(0);
  }, 2300);
}

_onGrow() {
  Animated.timing(this.growAnimated, {
    toValue: 1,
    duration: 200,
    easing: Easing.linear,
  }).start();
}



  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });
    return (
      <Wallpaper>
      <Logo />
      <View style={{justifyContent:'center'}}>
      <Text style={{ flex: 1,
  		alignItems: 'center',
      padding: 5,

        fontSize: 40,
        backgroundColor: 'transparent',
        color: 'white'
      }}> Manual Entry </Text>
</View>
      <KeyboardAvoidingView behavior='padding'
        style={styles.container}>
        <View style={styles.inputWrapper}>
          <Image source= {hcnImg}
            style={styles.inlineImg} />
          <TextInput style={styles.input}

            placeholder='Health Card Number'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({hcn: text})}
             />


        </View>
          </KeyboardAvoidingView>

          <View style={styles.container1}>
            <Animated.View style={{width: changeWidth}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this._onPress}
                activeOpacity={1}>
                {this.state.isLoading ? (
                  <Image source={spinner} style={styles.image} />
                ) : (
                  <Text style={styles.text}>ENTER</Text>
                )}
              </TouchableOpacity>
              <Animated.View
                style={[styles.circle, {transform: [{scale: changeScale}]}]}
              />
            </Animated.View>

          </View>
					

          </Wallpaper>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
    padding: 5,

      backgroundColor: 'transparent',
	},
  container1: {
  flex: 1,
  top: -95,
	padding: 20,
  alignItems: 'center',
  justifyContent: 'flex-start',
},
container2: {
    flex: 1
  },
  heartWrap: {
      position: 'absolute',
      bottom: 50,
      right: (DEVICE_WIDTH/2) - 25
  },
	btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF4447',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
  },
  circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: '#FF4447',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#FF4447',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
  input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
  },
});
