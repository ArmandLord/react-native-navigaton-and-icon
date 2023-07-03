import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

export type StackNavigation = StackNavigationProp<RootStackParams>;

export const Detail = () => {
  const navigator = useNavigation<StackNavigation>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Details',
      headerBackTitle: '',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Detail</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigator.navigate('Contact')}
      />
    </View>
  );
};
