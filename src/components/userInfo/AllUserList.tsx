import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/configureStore';
import {__getAllUserList} from '../../redux/modules/userList';
import {AppDispatch} from '../../redux/configureStore';

const AllUserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   console.log('생성');
  //   return console.log('소멸');
  // });

  const getAllUserList = useSelector(
    (state: RootState) => state.userList.userList,
  );
  // console.log(getAllUserList);
  // const mappedAllUserList = getAllUserList.map(user => user);
  // console.log(mappedAllUserList);

  useEffect(() => {
    dispatch(__getAllUserList());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      {getAllUserList.map(
        (
          user: {
            image: string;
            serialNumber: string;
            price: string;
          },
          index: number,
        ) => (
          <View style={styles.userList} key={index}>
            <Text>{index + 1}</Text>
            <Image style={styles.image} source={{uri: user.image}} />
            <Text style={styles.fontScore}>{user.serialNumber}</Text>
            <Text>{user.price}</Text>
          </View>
        ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

export default AllUserList;
