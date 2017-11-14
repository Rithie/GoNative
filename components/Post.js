import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//component puro - Component que só retorna uma view simples
const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.title}> { post.title} </Text>
      <Text style={styles.author}>  { post.author} </Text>
    </View>
    <Text style={styles.content}> {post.content} </Text>
  </View>
);

const $postTitle = '#333';
const $postAuthor = '#666';
const $postText = '#999';
const $postContainer = '#FFF';
const $shadowColor = '#DA6C6C';
const $separator = '#EEE';
const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: $postContainer,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: $shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    marginBottom: 20,
  },
  postHeader: {
    borderBottomColor: $separator,
    borderBottomWidth: 1,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    color: $postTitle,
    fontWeight: 'bold',
  },
  author: {
    color: $postAuthor,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: $postText,
    marginTop: 5,
    textAlign: 'left',
  },
});
export default Post;
