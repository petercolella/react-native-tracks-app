import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
