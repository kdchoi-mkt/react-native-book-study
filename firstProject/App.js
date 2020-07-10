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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const btnStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 5,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#5ca941'
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom: 10
  }
});


const viewStyles = {
  flex: 11,
  justifyContent: 'center',
  alignItems: 'center'
}

const textStyles = {
  color: '#fff',
  fontSize: 50
};

const btn = {
  borderStyle: 'solid',
  borderColor: '#d5d5d5',
  borderWidth: 12,
  backgroundColor: '#eee',
  borderRadius: 40,
  padding: 20,
  paddingLeft: 100,
  paddingRight: 100
};

const btnPrimary = {
  backgroundColor: '#60b044',
  borderColor: '#5ca941'
}

const App: () => React$Node = () => {
  console.log('Debugging from RN');
  return (
    <View style = {viewStyles} >
      <TouchableHighlight style = {[btnStyles.core, btnStyles.spacer]}>
        <Text style = {textStyles}>Submit1</Text>
      </TouchableHighlight>
      <TouchableHighlight style = {[btnStyles.core, btnStyles.hairlineBorder, btnStyles.spacer]}>
        <Text style = {textStyles}>Submit2</Text>
      </TouchableHighlight>
      <TouchableHighlight style = {[btnStyles.core, btnStyles.primary, btnStyles.spacer]}>
        <Text style = {textStyles}>Submit3</Text>
      </TouchableHighlight>
      <TouchableHighlight style = {[btnStyles.core, btnStyles.hairlineBorder, btnStyles.primary, btnStyles.spacer]}>
        <Text style = {textStyles}>Submit4</Text>
      </TouchableHighlight>
    </View>
   );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
