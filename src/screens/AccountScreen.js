import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Spacer>
          <Text h3>Account Screen</Text>
        </Spacer>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60
  }
});

export default AccountScreen;
