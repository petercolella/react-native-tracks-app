import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.signLink}>Already have an account? Sign in.</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 100
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15
  },
  signLink: {
    color: 'blue',
    fontSize: 18
  }
});

export default SignupScreen;
