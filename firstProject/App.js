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
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const viewStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}


const Bold = ({children, style, ...otherProps}) => <Text style = {[boldTextStyles.text, style]} {...otherProps}>{children}</Text>;

const boldTextStyles = StyleSheet.create({
  text: {
    fontWeight: '600'
  }
})

const BodyCopy = ({children}) => <Text style = {bodyCopyStyles.text}>{children}</Text>


const BodyCopyStyles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#333'
  }
})

const Headline = ({children}) => <Bold><Text style={headlineStyles.text}>{children}</Text></Bold>;

Headline.propTypes = StyleSheet.create({
  text: {
    fontFamily: 'Optima',
    fontSize: 30,
    color: '#333'
  }
});

const App: () => React$Node = () => {
  return (
    <View style={viewStyles}>
      <Image source={{uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188'}} 
      style={{width:200, height: 300}}>
        </Image>
    </View>
   );
};

const styles = StyleSheet.create({
  green: {
    color: 'green'
  }
});

export default App;
