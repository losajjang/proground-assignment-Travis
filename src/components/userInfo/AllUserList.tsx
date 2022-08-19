import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserBlockModal from './UserBlockModal';
import {Profile} from '../../assets/images/index';

const AllUserList = () => {
  const [userList, setUserList] = useState<any>();
  const [modal, showModal] = useState(false);
  const [userInfoModal, setUserInfoModal] = useState();
  const [userIndexModal, setUserIndexModal] = useState();

  const openModal = async (user: any, index: any) => {
    setUserInfoModal(user);
    setUserIndexModal(index);
    showModal(true);
  };

  const getUserList = async () => {
    try {
      const getList = await AsyncStorage.getItem('userList');
      if (getList !== null) {
        const data = JSON.parse(getList);
        setUserList(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onBlock = (user: any) => {
    setUserList(
      userList.map((userOrigin: any) =>
        userOrigin.serialNumber === user.serialNumber
          ? {...userOrigin, isBlock: !userOrigin.isBlock}
          : userOrigin,
      ),
    );
    showModal(false);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
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
            <Pressable
              key={index}
              onPress={() => {
                openModal(user, index);
              }}>
              <View style={styles.userList}>
                <Text>{index + 1}</Text>
                {user.isBlock ? (
                  <>
                    <Image style={styles.blockedImage} source={Profile} />
                    <Text style={styles.fontScore}>
                      blocked user_{index + 1}
                    </Text>
                  </>
                ) : (
                  <>
                    <Image style={styles.image} source={{uri: user.image}} />
                    <Text style={styles.fontScore}>{user.serialNumber}</Text>
                  </>
                )}
                <Text>{user.price}</Text>
              </View>
            </Pressable>
          ),
        )}
      </ScrollView>
      {modal && (
        <UserBlockModal
          showModal={() => showModal(false)}
          userInfoModal={userInfoModal}
          userIndexModal={userIndexModal}
          onBlock={onBlock}
        />
      )}
    </>
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
  blockedImage: {
    position: 'absolute',
    left: 75,
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default AllUserList;
