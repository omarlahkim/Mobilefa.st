import React from 'react';
import {ProfileStack} from 'src/navigation/stacks';
import {Profile, Settings} from 'src/screens';

export const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerShown: false,
      }}
      name="Profile"
      component={Profile}
    />
    <ProfileStack.Screen
      options={{
        headerShown: false,
      }}
      name="Settings"
      component={Settings}
    />
  </ProfileStack.Navigator>
);
