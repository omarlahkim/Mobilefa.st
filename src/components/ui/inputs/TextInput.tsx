import {Input} from '@rneui/themed';
import React from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet} from 'react-native';

interface TextInputProps {
  value?: string;
  label?: string;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  disabled?: boolean;
  control: any;
  name?: string;
  placeholder?: string;
  textAlign?: 'center' | 'left' | 'right';
  color?: string;
  placeholderTextColor?: string;
  textColor?: string;
  labelColor?: string;
}

export default function TextInput({
  value,
  label,
  name,
  placeholder,
  onFocus,
  textAlign,
  color,
  control,
  secureTextEntry = false,
  disabled,
  textColor,
  placeholderTextColor,
  labelColor,
}: TextInputProps) {
  const {field} = useController({
    name: name ?? label,
    defaultValue: value,
    control,
  });
  const styles = dynamicStyling({textAlign, textColor, labelColor, color});
  return (
    <Input
      labelStyle={styles.label}
      inputContainerStyle={styles.inputContainerStyle}
      value={field.value}
      onFocus={onFocus}
      onChangeText={field.onChange}
      containerStyle={styles.container}
      disabledInputStyle={{color: 'white', opacity: 0.9}}
      disabled={disabled}
      errorStyle={{display: 'none'}}
      label={label}
      style={styles.textStyle}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      // leftIcon={{type: 'font-awesome', name: 'user', color: 'white'}}
      // rightIcon={{type: 'font-awesome', name: 'user', color: 'white'}}
      secureTextEntry={secureTextEntry}
    />
  );
}

const dynamicStyling = ({textAlign, labelColor, textColor, color}: any) =>
  StyleSheet.create({
    inputContainerStyle: {
      padding: 0,
      backgroundColor: 'transparent',
    },
    container: {
      padding: 2,
      borderRadius: 8,
      backgroundColor: color,
      color: 'white',
      marginVertical: 6,
    },
    label: {
      color: labelColor,
      fontSize: 12,
      paddingHorizontal: 2,
      paddingVertical: 1,
      fontFamily: 'SpaceGrotesk-Regular',
      textTransform: 'capitalize',
    },
    textStyle: {
      color: textColor,
      fontSize: 16,
      padding: textAlign === 'center' ? 0 : 6,
      paddingBottom: textAlign === 'center' ? 6 : null,
      textAlign: textAlign,
      fontFamily: 'SpaceGrotesk-Regular',
      minHeight: 0,
    },
  });
