import React from 'react';
import { StyleSheet, View, StatusBar, Image, Dimensions } from 'react-native';
import Color from '../constants/colors';

import { ConversionInput } from '../components/ConversionInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={Color.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode='contain'
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <ConversionInput
        text='USD'
        value=''
        onButtonPress={() => alert('convert!')}
        onChangeText={(text) => console.log('text', text)}
        keyboardType='numeric'
      />
      <ConversionInput
        text='GBP'
        value=''
        onButtonPress={() => alert('convert!')}
      />
    </View>
  );
};

export default Home;
