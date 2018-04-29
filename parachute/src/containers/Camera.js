import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {Actions} from 'react-native-router-flux';
import AlertInput from 'react-native-alert-input';





export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});

    }

    showAlert=()=>{



}

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'column',}}>
                  <View style={{flex: 1, backgroundColor: 'black', opacity: 0.5,}}/>
                  <View style={{flex: 7,flexDirection: 'row',}}>
                      <View style={{flex: 100, backgroundColor: 'black', opacity: 0.5}}/>
                      <View style={{flex: 50, backgroundColor: 'transparent'}}/>
                      <View style={{flex: 1, backgroundColor: '#FF4447'}}/>
                      <View style={{flex: 50, backgroundColor: 'transparent'}}/>
                      <View style={{flex: 100, backgroundColor: 'black', opacity: 0.5}}/>

                  </View>
                  <View style={{flex: 1, backgroundColor: 'black', opacity: 0.5,}}>
                  <Button title='Enter Manually' onPress={this._handleManualEntry} color='white'/>

                </View>
              </View>
          </View>
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    data = data.slice(20,30);
    f4 = data.slice(0,4);
    s3 = data.slice(4,7);
    t3 = data.slice(7,10);
    hcn = `${f4}${s3}${t3}`;

   Actions.recipe({ match: { params: { id: hcn } } });
  }

  _handleManualEntry = ({ type, data }) => {


   Actions.ManualEntry();
  }
}
