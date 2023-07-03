import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const TwoTabScreen = () => {
  useEffect(() => {
    console.log('dos');
  }, []);
  return (
    <View>
      <Text>TwoTabScreen</Text>
    </View>
  );
};
