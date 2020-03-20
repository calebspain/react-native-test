import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#077525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    textAlign: 'center',
    color: '#fff'
  }
});
