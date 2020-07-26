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
import NewsItem from './src/components/NewsItem'

const App = () => {
  return (
    <View style={styles.mainView}>
      <NewsItem 
        imageUrl={url}
        title={DummyString}
        author='kdchoi'
        date={Date()}
        location="korea"
      />
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
