import React, {useCallback} from 'react';
import {
  DailyScore,
  EstimatedWalk,
  Footer,
  Header,
  LeaderBoard,
} from '../../components/userInfo/index';
import {ScrollView, SafeAreaView, View, StyleSheet} from 'react-native';
import {AllUserListScreenProps} from '../../types/AllUserListScreenPropsType';

const UserInfo = ({navigation}: AllUserListScreenProps) => {
  const openAllUserList = useCallback(() => {
    navigation.navigate('AllUserList');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView>
        <View>
          <DailyScore />
          <EstimatedWalk />
          <LeaderBoard openAllUserList={openAllUserList} />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default UserInfo;
