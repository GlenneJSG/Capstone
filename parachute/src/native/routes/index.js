
import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipeContainer from '../../containers/Recipes';

import RecipeViewComponent from '../components/Recipe';


import AppContainer from '../../containers/App';
import LoginContainer from '../../containers/Login'
import LoginComponent from '../components/Entry'
import Menu from '../components/Menu'

import CameraContainer from '../../containers/Camera';

import ManualEntry from '../components/ManualEntry';
import Settings from '../components/Settings';
import History from '../components/History';

const Index = (
  <Stack>
    <Scene hideNavBar>

      <Stack
        key="login"
        title="LOGIN"
        {...DefaultProps.navbarProps}
      >
        <Scene key="profileHome" component={LoginContainer}
        hideNavBar={true}
        Layout={LoginComponent} />



      </Stack>
      <Stack
        key="camera"
        hideNavBar={true}
        title="Scan"
        icon={() => <Icon name="planet" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
      <Scene key="group" component={CameraContainer} />
    </Stack>
    <Stack
      key="menu"
      hideNavBar={true}
      title="Scan"
      icon={() => <Icon name="planet" {...DefaultProps.icons} />}
      {...DefaultProps.navbarProps}
    >
    <Scene key="group" component={Menu} />
  </Stack>
  <Stack
    key="ManualEntry"
    hideNavBar={true}
    title="Scan"
    icon={() => <Icon name="planet" {...DefaultProps.icons} />}
    {...DefaultProps.navbarProps}
  >
  <Scene key="group" component={ManualEntry} />
</Stack>
<Stack
  key="Settings"
  hideNavBar={true}
  title="Scan"
  icon={() => <Icon name="planet" {...DefaultProps.icons} />}
  {...DefaultProps.navbarProps}
>
<Scene key="group" component={Settings} />
</Stack>
<Stack
  key="History"
  hideNavBar={true}
  title="Scan"
  icon={() => <Icon name="planet" {...DefaultProps.icons} />}
  {...DefaultProps.navbarProps}
>
<Scene key="group" component={History} />
</Stack>

    </Scene>

    <Scene
      back
      clone
      key="recipe"
      hideNavBar={true}
      title="Patients"
      {...DefaultProps.navbarProps}
      component={RecipeContainer}
      Layout={RecipeViewComponent}
    />
  </Stack>
);

export default Index;
