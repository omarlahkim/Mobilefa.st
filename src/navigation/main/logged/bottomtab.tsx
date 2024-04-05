/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import NavigationIcon from 'src/components/navigation/NavigationIcon';
import {Tab} from 'src/navigation/stacks';
import {Home} from 'src/screens';
import {ProfileNavigator} from './profile';

// Return the bottom tab navigator with the home screen
export const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <NavigationIcon
            type="octicons"
            focused={focused}
            color={color}
            size={size}
            focusedIcon="home"
            unfocusedIcon="home"
          />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <NavigationIcon
            type="font-awesome"
            focused={focused}
            focusedIcon="user"
            unfocusedIcon="user"
            size={size}
            color={color}
          />
        ),
      }}
      name="Profile"
      component={ProfileNavigator}
    />
  </Tab.Navigator>
);
