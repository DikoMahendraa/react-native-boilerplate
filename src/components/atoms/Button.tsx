import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface CustomButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onPress: () => void;
  suffix?: string;
  prefix?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  text,
  onPress,
  suffix,
  prefix,
  size = 'medium',
}) => {
  let buttonStyles: ViewStyle[] = [styles.button];
  switch (size) {
    case 'small':
      buttonStyles.push(styles.small);
      break;
    case 'medium':
      buttonStyles.push(styles.medium);
      break;
    case 'large':
      buttonStyles.push(styles.large);
      break;
    case 'wide':
      buttonStyles.push(styles.wide);
      break;
    default:
      buttonStyles.push(styles.medium);
      break;
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      {icon && icon}
      {text && <Text style={styles.text}>{text}</Text>}
      {suffix && <Text style={styles.suffix}>{suffix}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  wide: {
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  prefix: {
    marginRight: 5,
  },
  suffix: {
    marginLeft: 5,
  },
});

export default CustomButton;
