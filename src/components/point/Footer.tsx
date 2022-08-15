import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScoreA} from '../../assets/images/index';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={ScoreA} />
      <Text style={styles.footerFont}>Point</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
  },
  footerFont: {
    color: '#ff310f',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footerImage: {
    width: 25,
    height: 25,
  },
});

export default Footer;
