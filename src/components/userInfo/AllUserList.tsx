import React, {useCallback, useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/configureStore';
import {__getAllUserList} from '../../redux/modules/userList';
import {AppDispatch} from '../../redux/configureStore';
import {mockList} from '../../mockData';
import {AllUserListScreenProps} from '../../types/AllUserListScreenPropsType';

const AllUserList = ({navigation}: AllUserListScreenProps) => {
  const aaa = mockList;
  const dispatch = useDispatch<AppDispatch>();

  const getAllUserList = useSelector(
    (state: RootState) => state.userList.userList,
  );

  const openUserBlockModal = useCallback(() => {
    navigation.navigate('UserBlock');
  }, [navigation]);

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
          <Pressable
            onPress={e => {
              e.preventDefault();
              openUserBlockModal();
            }}>
            <View style={styles.userList} key={index}>
              <Text>{index + 1}</Text>
              {/* <Image style={styles.image} source={user.image} /> */}
              <Image style={styles.image} source={{uri: user.image}} />
              <Text style={styles.fontScore}>{user.serialNumber}</Text>
              <Text>{user.price}</Text>
            </View>
          </Pressable>
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
