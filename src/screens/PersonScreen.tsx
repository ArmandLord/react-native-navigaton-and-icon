import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

//? StackScreenProps recibe dos parametros: paramaList ⬇ y routeName ⬇
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const {id, name} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Person - {name} {id}
      </Text>
    </View>
  );
};
