import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Card } from './app/views/Card.js';
import { createStackNavigator } from 'react-navigation';

const MyRoutes = createStackNavigator( {
  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  },
  Card: {
    screen: Card
  }
},
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}




