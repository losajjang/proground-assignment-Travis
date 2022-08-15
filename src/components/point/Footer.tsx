import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScoreA} from '../../assets/images/index';

const Footer = () => {
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={ScoreA} />
      <Text style={styles.Font}>Point</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  Image: {
    width: 25,
    height: 25,
  },
  Font: {
    color: '#ff310f',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Footer;
