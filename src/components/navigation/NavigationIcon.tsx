import {Icon} from '@rneui/themed';
import React from 'react';
import {NavigationIconProps} from 'src/types/navigation';

export default function NavigationIcon({
  focused,
  color,
  size,
  focusedIcon,
  unfocusedIcon,
  type,
}: NavigationIconProps) {
  return (
    <Icon
      type={type}
      name={focused ? focusedIcon : unfocusedIcon}
      size={size}
      color={color}
    />
  );
}
