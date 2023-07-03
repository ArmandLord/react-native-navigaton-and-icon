import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, About, Contact, Detail, PersonScreen} from '../screens';

export type RootStackParams = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
  Detail: {id: number; name: string};
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" options={{title: 'Home'}} component={Home} />
      <Stack.Screen
        name="About"
        options={{title: 'About me'}}
        component={About}
      />
      <Stack.Screen
        name="Contact"
        options={{title: 'Contact me'}}
        component={Contact}
      />
      <Stack.Screen
        name="Detail"
        options={{title: 'Details'}}
        component={Detail}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
