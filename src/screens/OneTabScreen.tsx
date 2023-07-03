import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const OneTabScreen = () => {
  useEffect(() => {
    console.log('uno');
  }, []);
  return (
    <View>
      <Text>OneTabScreen</Text>
      <Icon name="pencil" size={30} color="#900" />
    </View>
  );
};
