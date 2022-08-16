import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UserInfoNav} from './src/pages/userInfo/index';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <UserInfoNav />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
