import React from 'react';
import {
  DailyScore,
  EstimatedWalk,
  Footer,
  Header,
  LeaderBoard,
} from '../../components/point/index';
import {ScrollView, SafeAreaView, View} from 'react-native';

export type componentType = {
  Header: undefined;
  DailyScore: undefined;
  EstimatedWalk: undefined;
  LeaderBoard: undefined;
  Footer: undefined;
};

const UserInfo = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header />
      </View>
      <ScrollView>
        <View>
          <DailyScore />
          <EstimatedWalk />
          <LeaderBoard />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default UserInfo;
