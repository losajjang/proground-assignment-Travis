import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {UserInfo} from './index';
import {AllUserList} from '../../components/userInfo/index';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/configureStore';
import {__getAllUserList} from '../../redux/modules/userList';

const Stack = createNativeStackNavigator();

const UserInfoNav = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(__getAllUserList());
  }, [dispatch]);

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
