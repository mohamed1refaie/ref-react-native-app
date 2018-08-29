import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login'
import Router from './src/Router'
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Refo</Text>
      // </View>
      <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
