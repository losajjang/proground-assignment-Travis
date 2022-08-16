import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const EstimatedWalk = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontTitle}>Estimated WALK</Text>
      <LinearGradient
        style={styles.innerContainer}
        colors={['#ffffff', '#fffaf4', '#fde0cd']}>
        <Text style={styles.fontEarn}>You Can Earn</Text>
        <Text style={styles.fontEarn}>
          <Text style={styles.fontWalkAccent}>0</Text> Walk
        </Text>
        <Text style={styles.fontEstimate}>estimated as of yesterday</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  fontTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: '#f8e2ce',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  fontEarn: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fontWalkAccent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fontEstimate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#696969',
  },
});

export default EstimatedWalk;
