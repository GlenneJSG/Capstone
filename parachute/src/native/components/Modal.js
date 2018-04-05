import React, { Component } from 'react';
import { Modal, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class ModalExample extends Component {

  state = {
    modalVisible: true,
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent:'center', alignSelf: 'center'}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onShow={() => { this.textInput.focus(); }}
          >
         <View style={{backgroundColor: 'green', marginTop: 50, width: 300, padding: 50, alignSelf: 'center'}}>
          <View>
            <Text>Hello World!</Text>
            <TextInput
              ref={(input) => { this.textInput = input; }}
              style={{ padding: 20, backgroundColor: 'white', color: 'red' }}
            />
          </View>
         </View>
        </Modal>

      </View>
    );
  }
}
