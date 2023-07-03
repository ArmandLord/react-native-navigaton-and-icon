import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  // BottomTabsNavigator,
  SideMenu,
  TopTabNavigator,
  // StackNavigator
} from './src/navigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <TopTabNavigator /> */}
      <SideMenu />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
2737;
export default App;
