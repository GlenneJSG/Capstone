import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Container, Content, List, ListItem, Body, Left, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';
import Wallpaper from './Wallpaper';


const Profile = ({ member, logout }) => (
  <Wallpaper>
    <Content>
      <List>
        {(member && member.email) ?
          <View>
            <Content padder>
              <Header
                title={`Hi ${member.firstName},`}
                content={`You are currently logged in as ${member.email}`}
              />
            </Content>


              <ListItem onPress={Actions.camera} icon>
                <Left>

                </Left>
                <Body>
                  <Text>View Patient</Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                </Left>
              <Body>
                <Text>Update My Profile</Text>
              </Body>
            </ListItem>

            <ListItem onPress={logout} icon>
            <Left>
            </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
            </ListItem>
          </View>
        :
          <View>
            <Content padder>
              <Header
                title="Sign In"
              />
            </Content>

            <ListItem onPress={Actions.login} icon>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Login</Text>
              </Body>
            </ListItem>
            <ListItem onPress={Actions.signUp} icon>
              <Left>
                <Icon name="add-circle" />
              </Left>
              <Body>
                <Text>Sign Up</Text>
              </Body>
            </ListItem>
            <ListItem onPress={Actions.forgotPassword} icon>
              <Left>
                <Icon name="help-buoy" />
              </Left>
              <Body>
                <Text>Forgot Password</Text>
              </Body>
            </ListItem>
          </View>
        }
      </List>
    </Content>
  </Wallpaper>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
