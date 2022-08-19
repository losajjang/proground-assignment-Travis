import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScoreA} from '../../assets/images/index';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ScoreA} />
      <Text style={styles.font}>Point</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  font: {
    color: '#ff310f',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Footer;
