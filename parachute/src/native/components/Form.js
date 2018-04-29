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
} from 'react-native';

import { Container, Content, Item, Label, Form, Input, Text, Button } from 'native-base';
import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';

export default class LoggingIn extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
			email: (props.member && props.member.email) ? props.member.email : '',
 		 password: '',
		};
		this.showPass = this.showPass.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	static propTypes = {
	 member: PropTypes.shape({
		 email: PropTypes.string,
	 }),
	 error: PropTypes.string,

 }

 static defaultProps = {
	 error: null,
	 member: {},
 }


 handleChange = (name, val) => {
	 this.setState({
		 ...this.state,
		 [name]: val,
	 });
}


	render() {
		return (
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
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
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
});
