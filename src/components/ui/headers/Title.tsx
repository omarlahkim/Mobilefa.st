import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface TitleProps {
  title: string;
  iconName: string;
  iconType: string;
  onPress: () => void;
  size?: 'sm' | 'md' | 'lg';
}

interface sizeProps {
  size: 'sm' | 'md' | 'lg' | null;
}

function _size(input: sizeProps | string | undefined) {
  switch (input) {
    case 'sm':
      return 15;
    case 'md':
      return 25;
    case 'lg':
      return 35;
    default:
      return 10;
  }
}

export default function Title(props: TitleProps) {
  const styles = dynamicStyles(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Icon
          name={props.iconName}
          size={_size(props.size)}
          type={props.iconType}
        />
      </TouchableOpacity>
    </View>
  );
}

const dynamicStyles = ({size = 'md', uppercase = false, iconSize = null}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: iconSize ? 20 : 0,
    },
    title: {
      fontSize: _size(size),
      fontFamily: 'BricolageGrotesque-Bold',
      fontWeight: 'bold',
      textTransform: uppercase ? 'uppercase' : 'none',
    },
    icon: {
      color: 'black',
    },
  });
