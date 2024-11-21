import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah */}
      <Text style={styles.text}>cao ni ma</Text>

      {/* Kotak kiri dan kanan */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Abu-abu terang
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Lebar tata letak kotak
  },
  box: {
    width: 100,
    height: 100,
  },
  boxLeft: {
    backgroundColor: 'red', // Warna bebas
  },
  boxRight: {
    backgroundColor: 'green', // Warna bebas
  },
});

export default App;
