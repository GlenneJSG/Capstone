import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

const PatientHeader = ({ image, patient, gender }) => (
  <Container>

    <View style={styles.container}>

  <View>
	<Spacer size={25} />
	<View style={{width: 50, height: 50, backgroundColor: 'white', text: {patient}}} />
	<Text>{gender}</Text>
	<Spacer size={15} />
	</View>
	<View>
	<Image source={{ uri:image }} style={{ height: 100, width: 100,  resizeMode: 'contain'}} />

	</View>
</View>
	</Container>
);

PatientHeader.propTypes = {
  image: PropTypes.string,
  patient: PropTypes.string,
gender: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 65,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});

export default PatientHeader;
