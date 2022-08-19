import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {onPressProps} from '../../types/onPressProps';

const LeaderBoard = ({openAllUserList}: onPressProps) => {
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    try {
      const getList = await AsyncStorage.getItem('userList');
      if (getList !== null) {
        const data = JSON.parse(getList);
        const newData = data.slice(0, 10);
        setUserList(newData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.fontTitle}>LeaderBoard</Text>
        <TouchableHighlight onPress={openAllUserList}>
          <Text>View All</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.leaderBoardContent}>
        {userList?.map(
          (
            user: {
              isBlock: boolean;
              image: string;
              serialNumber: string;
              price: string;
            },
            index: number,
          ) => (
            <View style={styles.userList}>
              <Text>{index + 1}</Text>
              <Image style={styles.image} source={{uri: user.image}} />
              <Text style={styles.fontScore}>{user.serialNumber}</Text>
              <Text>{user.price}</Text>
            </View>
          ),
        )}
      </View>
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
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaderBoardContent: {
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#eeeeee',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  userList: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fontScore: {
    position: 'absolute',
    left: 130,
  },
  image: {
    position: 'absolute',
    left: 70,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default LeaderBoard;
