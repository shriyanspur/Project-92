import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      bloodGroup: '',
      contact: '',
      address: '',
      country: '',
      email: '',
      password: '',
      confirmPass: '',
      isModalVisible: false,
    }
  }

  render() {
    console.log('welcome');
    return (
      <View style = {styles.background}>
        <Text style = {styles.appName}>
          Blood Share
        </Text>
        <TextInput
          style = {styles.email}
          placeholder = 'abc@email.com'
          onChangeText = {(text) => {
            this.setState({
              email: text,
            })
          }}
        />
        <TextInput
          style = {styles.password}
          placeholder = 'password'
          secureTextEntry = {true}
          onChangeText = {(text) => {
            this.setState({
              password: text,
            })
          }}
        />
        <TouchableOpacity
          style = {styles.loginButton}
          onPress = {() => {this.props.navigation.navigate('Request')}}
        >
          <Text style = {styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(31, 168, 233)',
  },
  appName: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 50
  },
  email: {
    backgroundColor: 'rgb(31, 168, 233)',
    alignSelf: 'center',
    textAlign: 'center',
    width: 375,
    height: 50,
    borderBottomWidth: 3,
    marginTop: 100
  },
  password: {
    backgroundColor: 'rgb(31, 168, 233)',
    alignSelf: 'center',
    textAlign: 'center',
    width: 375,
    height: 50,
    borderBottomWidth: 3,
    marginTop: 50
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    marginTop: 100,
    width: 100,
    height: 50
  },
  loginText: {
    alignSelf: 'center'
  }
})