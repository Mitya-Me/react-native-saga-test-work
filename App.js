/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import TopPanel from './src/components/TopPanel';
import LoginScreen from './src/screens/LoginScreen';
import colors from './src/styles/colors';



const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors.primary} />
      <TopPanel auth/>
      <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: colors.bg,
  }
})

export default App;
