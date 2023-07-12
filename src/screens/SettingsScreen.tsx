import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const {isLoggedIn, signIn} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text>SettingsScreen mamabicho</Text>
      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
        {isLoggedIn ? 'Está logueado' : 'No está logueado'}
      </Text>

      <TouchableOpacity
        onPress={signIn}
        style={{
          ...styles.btnSignIn,
          backgroundColor: isLoggedIn ? '#fa5c5c' : '#72d656',
        }}>
        <Text style={styles.text}>
          {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
