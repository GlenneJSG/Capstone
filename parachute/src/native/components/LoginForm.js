import React, { Component } from 'react';
import { View, Text, Button, Animated, TouchableOpacity, Easing, KeyboardAvoidingView,Image, Actions,  } from 'react-native';
import firebase from './firebase';
import TitledInput from './TitledInput';
import ButtonSubmit from './ButtonSubmit';
import Dimensions from 'Dimensions';
import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);

  }

    state = { email: '', password: '', error: '', loading: false,  };
    onLoginPress() {
      if (this.state.isLoading) return;
        this.setState({ error: '', loading: true });
        {this.onLoginPress.bind(this)}
        Animated.timing(
          this.buttonAnimated,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear
          }
        ).start();

        setTimeout(() => {
          this._onGrow();
        }, 2000);

        setTimeout(() => {
          Actions.camera();
          this.setState({ isLoading: false });
          this.buttonAnimated.setValue(0);
          this.growAnimated.setValue(0);
        }, 2300);

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });

}

            	_onGrow(){
            		Animated.timing(
            			this.growAnimated,
            			{
            				toValue: 1,
            				duration: 200,
            				easing: Easing.linear
            			}
            		).start();
            	};
              showPass() {
              this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
              }



    render() {
      const changeWidth = this.buttonAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
      });
      const changeScale = this.growAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [1, MARGIN]
      });
        return (
            <View style={styles.container}>
                    <TitledInput
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                    <KeyboardAvoidingView behavior='padding'
                      style={styles.container}>
                      <UserInput source={usernameImg}
                        placeholder='Username'
                        autoCapitalize={'none'}
                        value={this.state.email}
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                        returnKeyType={'done'}
                        autoCorrect={false} />
                      <UserInput source={passwordImg}
                        secureTextEntry={this.state.showPass}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder='Password'
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false} />
                        <TouchableOpacity
                          activeOpacity={0.7}
                          style={styles.btnEye}
                          onPress={this.showPass}
                        >
                          <Image source={eyeImg} style={styles.iconEye} />
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                      <Animated.View style={{width: changeWidth}}>
                        <TouchableOpacity style={styles.button}
                          onPress={this.onLoginPress.bind(this)}
                          activeOpacity={1} >
                            {this.state.isLoading ?
                              <Image source={spinner} style={styles.image} />
                              :
                              <Text style={styles.text}>LOGIN</Text>
                            }
                        </TouchableOpacity>
                        <Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
                      </Animated.View>
                    </View>

        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
  		flex: 1,
  		top: -95,
  		alignItems: 'center',
  		justifyContent: 'flex-start',
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
};

export default LoginForm;
