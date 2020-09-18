import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>Coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a0dad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 60,
    color: "#DDD",
    marginVertical: 4,
  },
}
);
