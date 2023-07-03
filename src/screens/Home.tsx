import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Home: FC<Props> = props => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Detail')}
      />
      {/* <Button
        title="Go to Person Screen"
        onPress={() => props.navigation.navigate('PersonScreen')}
      /> */}

      <Text>Navegar con argumentos</Text>
      <View style={stylesLocal.containerBtns}>
        <TouchableOpacity
          style={stylesLocal.btn}
          onPress={() =>
            props.navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Armandev',
            })
          }>
          <Text style={stylesLocal.btnText}>Go to Person - Armandev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesLocal.btn}
          onPress={() =>
            props.navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Sam mi amor',
            })
          }>
          <Text style={stylesLocal.btnText}>Go to Person - Samilu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  containerBtns: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#269553',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
