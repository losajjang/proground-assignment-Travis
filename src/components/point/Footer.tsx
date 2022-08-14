import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
  },
});

export default Footer;
