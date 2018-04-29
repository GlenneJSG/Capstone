import React, {Component} from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import {RkStyle, RkTabView} from 'react-native-ui-kitten';
import api from '../util/ApiMock';
import FriendList from '../components/common/FriendList';
import PostList from '../components/common/PostList';
import ImageGallery from '../components/common/ImageGallery';
import ThemeService from "../util/ThemeService";


export default class ProfileScreenBase extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let ProfileComponent = ThemeService.getProfileComponent();
    return (
      <View style={RkStyle.flex1}>
        <ScrollView
          automaticallyAdjustContentInsets={true}>
          <ProfileComponent user={api.getUserInfo(api.userId)}/>
          <View
            style={RkStyle.flex1}>
            {this._renderTabs()}
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderTabs() {
    let ProfileTab = ThemeService.getProfileTabComponent();
    let styles = ProfileTab.getStyles();
    return (
      <RkTabView tabsContainerStyle={styles.tabView}>
        <RkTabView.Tab title={(selected) => <ProfileTab selected={selected} name='Posts' value='62'/>}>
          <PostList style={styles.tabContent}
                    posts={api.getUserPosts(api.userId)}
                    iconStyle={styles.postIconsStyle}/>
        </RkTabView.Tab>
        <RkTabView.Tab title={(selected) => <ProfileTab selected={selected} name='Followers' value='124'/>}>
          <View style={styles.tabContent}>
            <FriendList friends={api.getUserFriends(api.userId)}/>
          </View>
        </RkTabView.Tab>
        <RkTabView.Tab title={(selected) => <ProfileTab selected={selected} name='Photo' value='48'/>}>
          <View style={styles.tabContent}>
            <ImageGallery style={styles.imageTab} posts={api.getUserPosts(api.userId)}/>
          </View>
        </RkTabView.Tab>
      </RkTabView>
    );
  }

}

