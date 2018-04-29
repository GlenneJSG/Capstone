import Wallpaper from './Wallpaper';
import React, {Component} from 'React';
import PropTypes from 'prop-types';
import Logo from './Logo';
import LoggingIn from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import Login from './Login';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, View } from 'native-base';
import { Dimensions, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class History extends Component {

	render(){
		return (
			<Wallpaper>
      <View>
      <Text style={styles.title}> History </Text>
      </View>


        <View>
        <Text style={{color: 'white',
        fontSize: 20,
        padding: 10,
        backgroundColor: 'transparent',
      }}> This page is available to registered users only. </Text>
      <Text style={{color: 'white',
      fontSize: 20,
      padding: 10,
      backgroundColor: 'transparent',
    }}> Feature is not available on demo app. </Text>
        </View>
        <Logo />
			</Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
  image: {
    width,
    height: Math.floor(height * 0.3),
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'white',
    fontSize: 40,
    padding: 80,
    backgroundColor: 'transparent',
  },
});
