import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {UserInfo} from './index';
import {AllUserList, UserBlockModal} from '../../components/userInfo/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UserBlock() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="UserBlockModal"
        component={UserBlockModal}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen
          name="UserBlock"
          component={UserBlock}
          options={{headerShown: false, presentation: 'transparentModal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserInfoNav;
