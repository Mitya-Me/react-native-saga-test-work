/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import colors from './src/styles/colors';
import Navigation from './src/navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors.primary} />
      <Navigation />
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
