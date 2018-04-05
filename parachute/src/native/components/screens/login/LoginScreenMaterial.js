import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {RkButton, RkStyle, RkTextInput, RkText, RkConfig, RkCard} from 'react-native-ui-kitten';
import LoginScreenBase from "../LoginScreenBase";

export default class LoginScreenMaterial extends LoginScreenBase {

  constructor(props) {
    super(props)
    let {width} = Dimensions.get('window');
    this._width = width;
    this.state = {
      login: ''
    }
  }

  render() {
    return (
      <ScrollView
        ref='scrollView'
        contentContainerStyle={{flex: 1}}
        style={{backgroundColor: RkConfig.colors.materialGray}}
        pagingEnabled={true}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        horizontal
        scrollEnabled={false}>
        <View style={{width: this._width, justifyContent: 'center'}}>
          <RkCard style={styles.container}>
            <View rkCardHeader style={styles.header}>
              <RkText/>
              <RkText style={styles.label}>Sign in into your account</RkText>
            </View>
            <View rkCardContent style={styles.content}>
              {this._renderInput('Enter your email', false, this.state.login, text=>this.setState({login: text}))}
            </View>
            <View rkCardFooter style={styles.footer}>
              <RkButton
                onPress={()=> {this.refs.scrollView.scrollTo({x: this._width})}}
                style={{marginTop: 20}}>
                NEXT
              </RkButton>
              <RkText style={styles.signUpText}>or create new account</RkText>
            </View>
          </RkCard>
        </View>
        <View style={{width: this._width, justifyContent: 'center'}}>
          <RkCard style={styles.container}>
            <View rkCardHeader style={styles.header}>
              <RkButton
                rkType='clear'
                onPress={()=>this.refs.scrollView.scrollTo({x: 0})}
                style={{alignSelf: 'flex-start'}}
                innerStyle={{color: 'white', fontSize: 26}}>
                <Icon name='md-arrow-back'/>
              </RkButton>
              <RkText style={styles.label}>Welcome {this.state.login}</RkText>
            </View>
            <View rkCardContent style={styles.content}>
              {this._renderInput('Enter your password', true)}
            </View>
            <View rkCardFooter style={styles.footer}>
              <RkButton onPress={()=>super._renderMainScreen()}>
                NEXT
              </RkButton>
              <RkText style={styles.signUpText}>or create new account</RkText>
            </View>
          </RkCard>
        </View>
      </ScrollView>
    );
  }

  _renderInput(label, secure, value, onChange){
   return(
     <RkTextInput
       rkType='underline topLabel'
       label={label}
       secureTextEntry={secure}
       value={value}
       onChangeText={onChange}
       labelStyle={styles.inputLabel}
       containerStyle={styles.inputContainer}
       style={styles.input}
       placeholderTextColor={RkConfig.colors.lightGray}/>
   )
  }

}

let styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderColor: 'transparent'
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: RkConfig.colors.materialBg,
    paddingRight: 15,
    paddingTop: 5,
    paddingLeft: 0,
  },
  content: {
    flex: 1,
    minHeight: 90,
    paddingHorizontal: 20,
    paddingTop: 15
  },
  footer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    borderTopWidth: 0
  },
  label: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 20,
    marginTop: 100
  },
  signUpText: {
    marginTop: 100,
    color: RkConfig.colors.gray
  },
  inputContainer:{
    borderBottomColor: RkConfig.colors.materialBg,
    borderBottomWidth: 1.5
  },
  inputLabel:{
    paddingBottom: 25
  },
  input:{
    fontSize: 20
  },
});
