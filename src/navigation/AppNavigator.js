import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/LoginScreen/index';
import Register from '../screens/RegisterScreen/index';
import Tabs from './Tabs';
import Plash from '../screens/PlashSrceen/index';
import Detail from '../screens/DetailScreen/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 5,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Plash"
        component={Plash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default AppNavigator;
