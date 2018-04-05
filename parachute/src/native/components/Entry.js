import Wallpaper from './Wallpaper';
import React, {Component} from 'React';
import PropTypes from 'prop-types';
import Logo from './Logo';
import LoggingIn from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import Login from './Login';


export default class Entry extends Component {

	render(){
		return (
			<Wallpaper>
				<Logo />
				<Login />
				<SignupSection />
				<ButtonSubmit />
			</Wallpaper>
		);
	}
}
