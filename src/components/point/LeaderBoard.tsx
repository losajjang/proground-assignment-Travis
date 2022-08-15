import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const LeaderBoard = () => {
  const mockList = [
    {
      id: 1,
      rank: 1,
      username: 'psy',
      score: 30,
    },
    {
      id: 2,
      rank: 2,
      username: 'pjm',
      score: 20,
    },
    {
      id: 3,
      rank: 3,
      username: 'pjm',
      score: 20,
    },
    {
      id: 4,
      rank: 4,
      username: 'pjm',
      score: 20,
    },
    {
      id: 5,
      rank: 5,
      username: 'pjm',
      score: 20,
    },
    {
      id: 6,
      rank: 6,
      username: 'pjm',
      score: 20,
    },
    {
      id: 7,
      rank: 7,
      username: 'pjm',
      score: 20,
    },
    {
      id: 8,
      rank: 8,
      username: 'pjm',
      score: 20,
    },
    {
      id: 9,
      rank: 9,
      username: 'pjm',
      score: 20,
    },
    {
      id: 10,
      rank: 10,
      username: 'pjm',
      score: 20,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.fontTitle}>LeaderBoard</Text>
        <Pressable>
          <Text>View All</Text>
        </Pressable>
      </View>
      <View style={styles.leaderBoardContent}>
        {mockList.map(user => (
          <View style={styles.userList} key={user.id}>
            <Text>{user.rank}</Text>
            <Text>사진</Text>
            <Text>{user.username}</Text>
            <Text style={styles.fontScore}>{user.score}</Text>
          </View>
        ))}
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
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fontScore: {
    marginLeft: 150,
  },
});

export default LeaderBoard;
