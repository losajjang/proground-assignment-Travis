import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {UserInfo} from './index';
import {AllUserList} from '../../components/userInfo/index';

const Stack = createNativeStackNavigator();

const UserInfoNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllUserList"
          component={AllUserList}
          options={{title: 'Leader Board'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserInfoNav;
