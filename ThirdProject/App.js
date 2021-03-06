/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Countly from './src/component/Countly'


const App = () => {
  return (
    <View style={styles.mainView} >
      <Countly>Hello</Countly>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
