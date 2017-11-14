/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Post from './components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    appTitle: 'GoNative App',
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native1',
        author: 'Euler Alvarenga',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis consequat maximus. Donec porttitor ex eu ante lacinia, vitae blandit erat auctor.'
      },
      {
        id: 2,
        title: 'Aprendendo React Native2',
        author: 'Austin Mendes',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis consequat maximus. Donec porttitor ex eu ante lacinia, vitae blandit erat auctor.'
      },
      {
        id: 3,
        title: 'Aprendendo React Native2',
        author: 'Austin Mendes',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis consequat maximus. Donec porttitor ex eu ante lacinia, vitae blandit erat auctor.'
      },
      {
        id: 4,
        title: 'Aprendendo React Native2',
        author: 'Austin Mendes',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis consequat maximus. Donec porttitor ex eu ante lacinia, vitae blandit erat auctor.'
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle} > {this.state.appTitle} </Text>
          </View>
          <ScrollView style={styles.contentScroll}
              vertical
              pagingEnabled
              showsHorizontalScrollIndicator={true}
              >
            {this.state.posts.map(post => <Post key={post.id} post={post} />)}
          </ScrollView>
      </View>
    );
  }
}

const $bgApp = '#EE7777';
const $headerColor = '#FFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $bgApp,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: $headerColor,
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  contentScroll:{
    
  },
});
