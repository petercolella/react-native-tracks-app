import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
