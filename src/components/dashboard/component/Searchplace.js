import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {getPlace} from '../../../api/getPlace';
import {Placeempty} from '../../../api/Placeempty';
import {styles} from '../../../utils/style';

class Searchplace extends PureComponent {
  state = {
    search: '',
    timer: 0,
  };

  updateSearch = (search) => {
    this.setState({search});

    clearTimeout(this.timer);
    if (search.length > 2) {
      this.timer = setTimeout(() => {
        this.props.getPlace(search);
      }, 2000);
    }
    if (search.length == 0) {
      this.props.Placeempty();
    }
  };

  render() {
    const {search} = this.state;
    return (
      <TextInput
        ref={(input) => {
          this.textInput = input;
        }}
        style={styles.searchBar}
        placeholder="Search here like Banglore..."
        placeholderTextColor="white"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlace: (serachTxt) => {
      dispatch(getPlace(serachTxt));
    },
    Placeempty: (serachTxt) => {
      dispatch(Placeempty(serachTxt));
    },
  };
};

export default connect(null, mapDispatchToProps)(Searchplace);
