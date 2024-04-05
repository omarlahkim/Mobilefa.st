import React from 'react';
import {Button, Icon, Text} from '@rneui/themed';
import {StyleSheet} from 'react-native';

interface IloginButtonProps {
  color: string;
  icon?: string;
  text: string;
  type?: string;
  textColor?: string;
  onPress: () => any;
}

export default function SocialLoginButton({
  color,
  icon,
  text,
  type,
  onPress,
  textColor = 'white',
}: IloginButtonProps) {
  const styles = styling({textColor});
  return (
    <Button onPress={onPress} color={color}>
      <Icon type={type} color={textColor} size={25} name={icon ?? 'email'} />
      <Text style={styles.text} h3>
        {text}
      </Text>
    </Button>
  );
}

const styling = ({textColor}: {textColor: string}) =>
  StyleSheet.create({
    text: {color: textColor, paddingHorizontal: 5},
  });
