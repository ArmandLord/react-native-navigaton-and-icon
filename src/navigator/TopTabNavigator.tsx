import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Albun, Chat, ContactTop} from '../screens';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={
        {
          // backgroundColor: '#da6e6e',
        }
      }
      screenOptions={{
        tabBarActiveTintColor: '#c4740b',
        tabBarStyle: {
          backgroundColor: '#e5c9c9',
        },
        tabBarPressColor: '#c4740b',
      }}

      // tabBarPosition="bottom"
      // tabBar={}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="ContactTop" component={ContactTop} />
      <Tab.Screen name="Albun" component={Albun} />
    </Tab.Navigator>
  );
};
