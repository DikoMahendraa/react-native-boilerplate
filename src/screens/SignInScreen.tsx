import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LogIn, LogOut} from 'lucide-react-native';
import {Input, Button} from '../components/atoms';

const SignInScreen = () => {
  const [email] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error=""
        prefix={<LogIn />}
        suffix={<LogOut />}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error=""
        prefix={<LogIn />}
        suffix={<LogOut />}
      />
      <Button
        text="Sign In"
        onPress={handleLogin}
        size="medium"
        icon={<LogIn color="white" size={22} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SignInScreen;
