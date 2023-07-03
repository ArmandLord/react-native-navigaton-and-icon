import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {BottomTabsNavigator, StackNavigator} from './';
import {SettingsScreen} from '../screens';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        // headerShown: false,
        // drawerPosition: 'left',
      }}
      drawerContent={props => <MenuContent {...props} />}
      // initialRouteName="StackNavigator"
    >
      <Drawer.Screen
        name="Tabs"
        options={{title: 'Tabs 🫶🏻'}}
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuContent = (_props: DrawerContentComponentProps) => {
  const {navigate} = _props.navigation;
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={styles.avatarImage}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#bbbb2b',
            padding: 10,
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
          }}
          onPress={() => {
            navigate('Tabs');
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Tabs 🎉
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#e78484',
            padding: 10,
          }}
          onPress={() => {
            navigate('SettingsScreen');
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
