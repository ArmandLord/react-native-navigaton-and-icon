import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Contact = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Contact',
      headerBackTitle: '',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button title="Return" onPress={() => navigation.pop()} />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
