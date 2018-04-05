import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Drawer from 'react-native-drawer'
import Icon from '../../node_modules/react-native-vector-icons/Ionicons'; //TODO normal import string?
import ThemeService from '../util/ThemeService';
import {RkConfig, RkBarBg, RkTabView, RkButton, RkSeparator, RkStyle} from 'react-native-ui-kitten';
import api from '../util/ApiMock';
import Toolbar from '../components/common/Toolbar';
import DrawerMenu from '../components/DrawerMenu';
import MainScreenBase from './MainScreenBase';

export default class MainScreenMaterial extends MainScreenBase {


  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'News'
    };
  }

  render() {
    const drawerStyles = {
      drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        backgroundColor: 'white'
      },
      main: {paddingLeft: 3},
    };
    return (
      <Drawer
        ref="drawer"
        content={<DrawerMenu
          user={api.getUserInfo(api.userId)}
          recentChats={[api.getUserInfo('2'), api.getUserInfo('3'), api.getUserInfo('4')]}
          currentScreen={this.state.selectedTab}
          changeScreen={(name) => this._changeScreen(name)}
          openChat={(user) => this._openChat(user)}
        />}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        panOpenMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
           mainOverlay: { opacity: 0.6*ratio, backgroundColor: 'black' }
        })}
      >
        <StatusBar barStyle="light-content"/>
        <Toolbar
          style={{backgroundColor: RkConfig.colors.materialBg}}
          title={this.state.selectedTab}
          leftIcon="md-menu"
          onLeftClick={()=>(this.refs.drawer.open())}/>
        {this._getCurrentScreen()}
      </Drawer>
    );
  }

  _changeScreen(screenName) {
    this.setState({
      selectedTab: screenName
    });
    this.refs.drawer.close();
  }

  _openChat(user) {
    this.refs.drawer.close();
    this.props.navigator.push({
      screen: ThemeService.getChatScreen(),
      passProps: {
        userId: user.id
      }
    });
  }

  _getCurrentScreen() {
    if (this.state.selectedTab === 'Profile') {
      return <this._screens.profile navigator={this.props.navigator} />
    }
    if (this.state.selectedTab === 'News') {
      return <this._screens.news navigator={this.props.navigator} />
    }
    if (this.state.selectedTab === 'Chats') {
      return <this._screens.chat navigator={this.props.navigator} />
    }
    if (this.state.selectedTab === 'Settings') {
      return <this._screens.settings navigator={this.props.navigator} />
    }
  }

}
var styles = StyleSheet.create({});


