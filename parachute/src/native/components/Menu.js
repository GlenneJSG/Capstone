import React from 'react';
import { View, Dimensions, Image, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import Wallpaper from './Wallpaper';

const { width, height } = Dimensions.get('window');
const  PatientPage = require('../images/PatientPage.png');
const  Settings = require('../images/settings.png');
const  History = require('../images/History.png');

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
    padding: 5,
    backgroundColor: 'transparent',
  },
});

const imageAndText = (imageSource, text) => (

  <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,

      }}
    automaticallyAdjustContentInsets={false}>
  <Image style={{ height: 100, width: 100, flex: 1, resizeMode: 'contain', justifyContent: 'center',}} source={imageSource} />

  <Text style={styles.title}>
    {text}
  </Text>
</View>




);

const Menu = () => (
  <Wallpaper>
    <ScrollView>

      <TouchableOpacity onPress={() => Actions.camera()}>
          {imageAndText(PatientPage, 'View an EHR')}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.Settings()}>
        {imageAndText(Settings, 'Settings')}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.History()}>
        {imageAndText(History, 'History')}
      </TouchableOpacity>

      </ScrollView>
  </Wallpaper>
);

export default Menu;
