import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Searchplace from './component/Searchplace';
import Listplace from './component/Listplace';

class dashboardList extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.parentStyle}>
            <Searchplace />
            <Listplace navigation={navigate} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  parentStyle: {
    flex: 1,
    margin: 10,
  },
});

export default dashboardList;
