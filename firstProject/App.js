/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const BasicType = () => {
  <Text style = {styles.headline}>
  Welcome to <Text style = {styles.bold}> REACT </Text> native {'\n'}
  <Text style = {styles.subheader}>This is <Text style = {styles.bold}>so cool</Text>
  </Text>
</Text>
}

const App: () => React$Node = () => {
  console.log('Debugging from RN');
  return (
    BasicType()
   );
};

const styles = StyleSheet.create({
  headline: {
    fontFamily: 'Georgia',
    fontSize: 20
  },
  subheader: {
    color: 'blue'
  },
  bold: {
    fontWeight: 'bold'
  }
});


export default App;
