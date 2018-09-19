import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import QRCode from 'react-native-qrcode';

export class Card extends React.Component {
  static navigationOptions = { 
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <View style={styles.qrcontainer}>
          <Text style={styles.textstyle}>Chris Roberts</Text>
          <QRCode
            value={"12345678"}
            size={300}
            bgColor='white'
            fgColor='black'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  qrcontainer: {
    flex: 14,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textstyle: {
    fontSize: 40,
    marginBottom: 20
  }
  
})

