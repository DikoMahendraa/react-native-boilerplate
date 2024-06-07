import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  variant?: 'small' | 'medium' | 'large';
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: ViewStyle;
}

const Input: React.FC<InputProps> = ({
  variant = 'medium',
  error,
  prefix,
  suffix,
  style,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.container,
        styles[variant],
        style,
        error ? styles.error : {},
      ]}>
      {prefix && <View style={styles.prefix}>{prefix}</View>}
      <TextInput style={styles.input} {...rest} />
      {suffix && <View style={styles.suffix}>{suffix}</View>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  prefix: {
    marginRight: 8,
  },
  suffix: {
    marginLeft: 8,
  },
  small: {
    height: 40,
  },
  medium: {
    height: 50,
  },
  large: {
    height: 60,
  },
  error: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Input;
