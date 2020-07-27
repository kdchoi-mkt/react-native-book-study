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

import NewsFeed from './src/components/NewsFeed'
import DummyFeed from './src/components/DummyFeed'
import Search from './src/components/Search'

const App = () => {
  return (
    <View style={styles.mainView}>
      <NewsFeed dataSource={DummyFeed}/>
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
