import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './styles';

import { Image, Platform, ScrollView } from 'react-native';
import { Container, Content, Text, InputGroup, Input, Button, Thumbnail, Icon, Item, View, Spinner, Fab } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import { StackNavigator } from 'react-navigation';

const backgroundImage = require('../../images/map.png');


class Landing extends React.Component {

  //add or remove header
  static navigationOptions = {
    header: false
  }

  constructor(props) {
    super(props);
    this.state = {active: 'true'};
  }

  // constructor() {
  //   this.state = {
  //     active: 'true'
  //   };
  // }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container} >
        <Content  style={styles.background}>

          <Image source={backgroundImage} style={styles.thumbnail}/>

          <View style={{ flex: 1 }}>

          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>

        </Content>
      </Container>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: Landing,
  },
});

export default ModalStack;
