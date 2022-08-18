import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Profile} from '../../assets/images/index';

type showModalType = {
  showModal: () => void;
  userInfoModal: any;
  onBlock: (arg: any) => void;
  userIndexModal: any;
};

const UserBlockModal = ({
  showModal,
  userInfoModal,
  onBlock,
  userIndexModal,
}: showModalType) => {
  return (
    <Pressable style={styles.container} onPress={showModal}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        {userInfoModal.isBlock ? (
          <>
            <Image style={styles.profilePhoto} source={Profile} />
            <Text style={styles.username}>
              blocked user_{userIndexModal + 1}
            </Text>
            <Pressable
              style={styles.blockButton}
              onPress={() => {
                onBlock(userInfoModal);
              }}>
              <Text style={styles.BlockButtonFont}>Unblock</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Image
              style={styles.profilePhoto}
              source={{uri: userInfoModal.image}}
            />
            <Text style={styles.username}>{userInfoModal.serialNumber}</Text>
            <Pressable
              style={styles.blockButton}
              onPress={() => {
                onBlock(userInfoModal);
              }}>
              <Text style={styles.BlockButtonFont}>Block</Text>
            </Pressable>
          </>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    position: 'absolute',
    top: 450,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  profilePhoto: {
    marginTop: 25,
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 18,
  },
  blockButton: {
    marginTop: 45,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderWidth: 2.5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 0,
  },
  BlockButtonFont: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default UserBlockModal;
