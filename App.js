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
import { Provider } from 'react-redux';
import store from './src/redux'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={colors.primary} />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  }
})

export default App;
