import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {AllUserListScreenProps} from '../../types/AllUserListScreenPropsType';

const UserBlockModal = ({navigation}: AllUserListScreenProps) => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.3)'},
        ]}
        onPress={navigation.goBack}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
        }}>
        <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
      </View>
    </View>
  );
};

export default UserBlockModal;
