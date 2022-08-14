import React from 'react';
import {View} from 'react-native';
import {Point} from './src/pages/point/index';

export type pageType = {
  Point: undefined;
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Point />
    </View>
  );
};

export default App;
