import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserProfile, Cnk, Grnd, Klay, Wallet} from '../../assets/images/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.userProfileImage} source={UserProfile} />
      <View style={styles.rewardContainer}>
        <Image style={styles.rewardImageFirstChild} source={Cnk} />
        <Text style={styles.rewardText}>1.2</Text>
        <Image style={styles.rewardImageOtherChild} source={Grnd} />
        <Text style={styles.rewardText}>0</Text>
        <Image style={styles.rewardImageOtherChild} source={Klay} />
        <Text style={styles.rewardText}>1.07</Text>
      </View>
      <Image style={styles.walletImage} source={Wallet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userProfileImage: {
    width: 30,
    height: 30,
    left: 8,
    marginRight: 130,
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  rewardImageFirstChild: {
    width: 20,
    height: 20,
    marginLeft: 0,
    marginRight: 4,
  },
  rewardImageOtherChild: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 4,
  },
  rewardText: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  walletImage: {
    width: 30,
    height: 30,
    right: 8,
  },
});

export default Header;
