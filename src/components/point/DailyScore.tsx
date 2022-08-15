import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DailyScore = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.fontTitle}>Daily Score</Text>
        <Text style={styles.fontPoint}>
          <Text style={styles.fontPointAccent}>0</Text> point
        </Text>
        <View style={styles.exp} />
        <Text style={styles.fontDesc}>
          Top <Text style={styles.fontDescAccent}>100%</Text> of SuperWalkers
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
    shadowColor: '#eeeeef',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  fontTitle: {
    fontWeight: 'bold',
  },
  fontPoint: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  fontPointAccent: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  exp: {
    marginTop: 8,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#f6c6b5',
    borderRadius: 100,
    width: '80%',
  },
  fontDesc: {
    marginTop: 10,
    color: '#8e8e8e',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fontDescAccent: {
    color: '#eb4e28',
    fontWeight: 'bold',
  },
});

export default DailyScore;
