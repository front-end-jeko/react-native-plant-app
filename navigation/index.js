import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup'

const AppNavigator = createStackNavigator(
  {
    Home: Welcome,
    Login: Login,
    Signup: Signup,
  },

  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);