const React = require('react-native');
import { Platform } from 'react-native';
const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  background: {
    backgroundColor: '#B39DDB'
  },
  container: {
    height: deviceHeight,
    marginTop: Platform.OS === 'ios' ? 0 : -10,
  },
  shadow: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'transparent',
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 2 - 15,
    // backgroundColor: '#00b8d4',
    backgroundColor: '#673AB7',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: Platform.OS === 'ios' ? 70 : 50,
  },
  thumbnail: {
    marginTop: 100,
    width: 220,
    height: 220,
    borderRadius: 107,
    borderWidth: 2,
    borderColor: '#4527A0',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  }
};
