import Wallpaper from './Wallpaper';
import React, {Component} from 'React';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';


export default class Entry extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}
