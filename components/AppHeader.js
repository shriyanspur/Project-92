import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export const AppHeader = (props) => {
  return (
    <Header
      centerComponent = {{ text: props.title, style: { color: '#90A5A9', fontSize:20, fontWeight:"bold" }}}
      backgroundColor = "#eaf8fe"
    />
  );
}