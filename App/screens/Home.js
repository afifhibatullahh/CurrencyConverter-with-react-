import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import Button from '../components/Button';
import { ConversionInput } from '../components/ConversionInput';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
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
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
});

const Home = ({ navigation }) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.8345;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true);
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name='cog' size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.content}>
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
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value='123'
            onButtonPress={() => alert('convert!')}
            onChangeText={(text) => console.log('text', text)}
            keyboardType='numeric'
          />
          <ConversionInput
            text={quoteCurrency}
            value='123'
            onButtonPress={() => alert('convert!')}
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date.toDateString()}`}
          </Text>

          <Button text='Reverse Currencies' onPress={() => alert('todo!')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
