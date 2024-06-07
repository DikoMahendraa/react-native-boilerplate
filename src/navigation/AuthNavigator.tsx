import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignupScreen from '../screens/SignUpScreen';
import {AuthRoutes} from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AuthRoutes.SIGNIN}>
      <Stack.Screen name={AuthRoutes.SIGNIN} component={SignInScreen} />
      <Stack.Screen name={AuthRoutes.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
