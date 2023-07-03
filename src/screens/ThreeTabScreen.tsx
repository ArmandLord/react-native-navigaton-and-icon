import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const ThreeTabScreen = () => {
  useEffect(() => {
    console.log('tres');
  }, []);
  return (
    <View>
      <Text>ThreeTabScreen</Text>
    </View>
  );
};
