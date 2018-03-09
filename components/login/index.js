import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './styles';

import { Image, Platform, ScrollView } from 'react-native';
import { Container, Content, Text, InputGroup, Input, Button, Thumbnail, Icon, Item, View, Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import { StackNavigator } from 'react-navigation';


class Login extends React.Component {
  static navigationOptions = {
    header: false
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container} >

        <Content keyboardShouldPersistTaps="always" style={{ backgroundColor: '#673AB7' }}>
              <View style={styles.bg}>
                <View style={{ flexGrow: 1, paddingBottom:10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Feather active name="user" />
                    <Input
                      placeholder="EMAIL"
                      placeholderTextColor="#FFF"
                      keyboardType="email-address"
                    />
                  </Item>
                </View>

                <View style={{ flexGrow: 1,marginTop:(Platform.OS === 'ios') ? -10: 10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Feather name="unlock" />
                    <Input
                      placeholder="CONTRASEÑA"
                      placeholderTextColor="#FFF"
                      secureTextEntry
                    />
                  </Item>
                </View>

                <Button
                  transparent
                  style={{ alignSelf: 'flex-end', marginBottom: (Platform.OS === 'ios') ? 5 : 5, marginTop: 5 }}
                >
                  <Text style={{ color:'#fff' }}>
                    Recordar Contraseña
                  </Text>
                </Button>

                <Button
                  light
                  rounded
                  block
                  style={{ marginBottom: 5 }}
                  // Remove name lucy
                  onPress={() => this.props.navigation.navigate('AppNavigator', {name: 'Lucy'})}
                >
                  <Text style={{ color: '#673AB7' }}>Log In</Text>
                </Button>

                <Button
                  transparent
                  style={{ alignSelf: 'center' }}
                  onPress={() => this.props.navigation.navigate()}
                >
                  <Text style={{ color:'#fff' }}>
                    Registrate
                  </Text>
                </Button>
                </View>
          </Content>
      </Container>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: Login,
  },
});

export default ModalStack;
