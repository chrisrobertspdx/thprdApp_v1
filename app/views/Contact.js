import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {
  static navigationOptions = { 
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <Text style={{flex: 8}}>Introduction to Contact</Text>
        <Text style={{flex: 8}}>More Contact form will go here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

