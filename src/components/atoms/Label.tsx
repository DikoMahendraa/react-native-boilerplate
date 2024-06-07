import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface CustomLabelProps extends TextProps {
  customText: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({customText, ...rest}) => {
  return (
    <Text {...rest} style={styles}>
      {customText}
    </Text>
  );
};

const styles = StyleSheet.create({
  // You can add any custom styles here
});

export default CustomLabel;
