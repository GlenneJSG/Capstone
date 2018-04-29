
import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipeContainer from '../../containers/Recipes';
import RecipeComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import AppContainer from '../../containers/App';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';


import CameraContainer from '../../containers/Camera';

const Index = (
  <Stack>
    <Scene hideNavBar>

      <Stack
        key="profile"
        title="PROFILE"
        icon={() => <Icon name="person" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="profileHome" component={AppContainer} Layout={ProfileComponent} />
        <Scene
          back
          key="signUp"
          title="SIGN UP"
          {...DefaultProps.navbarProps}
          component={SignUpContainer}
          Layout={SignUpComponent}
        />
        <Scene
          back
          key="login"
          title="LOGIN"
          {...DefaultProps.navbarProps}
          component={LoginContainer}
          Layout={LoginComponent}
        />
        <Scene
          back
          key="forgotPassword"
          title="FORGOT PASSWORD"
          {...DefaultProps.navbarProps}
          component={ForgotPasswordContainer}
          Layout={ForgotPasswordComponent}
        />
        <Scene
          back
          key="updateProfile"
          title="UPDATE PROFILE"
          {...DefaultProps.navbarProps}
          component={UpdateProfileContainer}
          Layout={UpdateProfileComponent}
        />
      </Stack>
      <Stack
        key="camera"
        title="Scan"
        icon={() => <Icon name="planet" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
      <Scene key="group" component={CameraContainer} />
    </Stack>

    </Scene>

    <Scene
      back
      clone
      key="recipe"
      title="Patients"
      {...DefaultProps.navbarProps}
      component={RecipeContainer}
      Layout={RecipeViewComponent}
    />
  </Stack>
);

export default Index;
