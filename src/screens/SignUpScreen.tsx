import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/atoms/Button';
import {LogIn, LogOut} from 'lucide-react-native';
import Input from '../components/atoms/Input';

const SignUpScreen = () => {
  const [email] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <CustomButton
        text="Sign In"
        onPress={handleRegister}
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

export default SignUpScreen;
