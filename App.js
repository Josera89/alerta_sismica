import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/login';
import Landing from './components/landing';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
