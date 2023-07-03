import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {OneTabScreen, ThreeTabScreen, TwoTabScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
// import {Text} from 'react-native';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

const TabIos = createBottomTabNavigator();

const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <TabIos.Navigator
    // tabBar={props => <MyTabBar {...props} />}
    >
      <TabIos.Screen
        options={{
          title: 'Palomas',
          // tabBarIcon: ({size, color}) => (
          //   <Text style={{color, fontSize: size}}>🍿</Text>
          // ),
        }}
        name="ONE"
        component={OneTabScreen}
      />
      <TabIos.Screen name="TopNavigator" component={TopTabNavigator} />
      <TabIos.Screen name="StackNavigator" component={StackNavigator} />
    </TabIos.Navigator>
  ) : (
    <TabAndroid.Navigator>
      <TabAndroid.Screen
        options={{
          title: 'Palomas',
          // tabBarIcon: ({size, color}) => (
          //   <Text style={{color, fontSize: size}}>🍿</Text>
          // ),
        }}
        name="ONE"
        component={OneTabScreen}
      />
      <TabAndroid.Screen name="TopNavigator" component={TopTabNavigator} />
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </TabAndroid.Navigator>
  );
};

type MyTabBarProps = BottomTabBarProps;

// export function MyTabBar({state, descriptors, navigation}: MyTabBarProps) {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const icon = label === 'ONE' ? '🍿' : label === 'TWO' ? '🍕' : '🍔';

//         return (
//           <TouchableOpacity
//             key={index}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1}}>
//             {/* //icon */}
//             <Text>{icon}</Text>

//             <Text
//               style={{
//                 color: isFocused ? '#673ab7' : '#222',
//               }}>{`${label}`}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

export const BottomTabsNavigator = (_props: any) => {
  // navigation
  // const {navigate} = _props.navigation;
  return Tabs();
};
