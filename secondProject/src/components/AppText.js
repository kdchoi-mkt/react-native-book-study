import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import * as globalStyles from '../styles/global';

const AppText = ({ children, style, ...rest }) => {
  return (
      <Text style = {[globalStyles.COMMON_STYLES.text, style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default AppText;
