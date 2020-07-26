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
} from 'react-native';

import DummyString from './src/components/LoremIpsum'
import url from './src/components/SampleImage'
import Thumbnail from './src/components/Thumbnail'

const App = () => {
  return (
    <View style={styles.mainView}>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={0}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={1}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={2}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={3}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={4}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={5}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={6}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={7}/>
      <Thumbnail url={url} titleText={DummyString} accentColor="#ff0000" blurRadius={8}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
