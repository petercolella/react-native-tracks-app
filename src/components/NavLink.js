import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.signLink}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signLink: {
    color: 'blue',
    fontSize: 18
  }
});

export default withNavigation(NavLink);
