import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from 'src/screens/Profile';
import Settings from 'src/screens/Settings';
import InAppPurchaseModal from 'src/components/Modals/InAppPurchase';
import {Icon} from '@rneui/themed';

// Create stack navigators
const ProfileStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerShown: false,
      }}
      name="ProfileScreen"
      component={Profile}
    />
    <ProfileStack.Screen
      options={{
        headerShown: false,
      }}
      name="SettingsScreen"
      component={Settings}
    />
  </ProfileStack.Navigator>
);

// Return the bottom tab navigator with the home screen
const LoggedInNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            type="octicons"
            name={focused ? 'home' : 'home'}
            size={size}
            color={color}
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
          <Icon
            type="font-awesome"
            name={focused ? 'user' : 'user'}
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

const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      options={{headerShown: false}}
      name="LoggedInNavigator"
      component={LoggedInNavigator}
    />
    <MainStack.Screen
      name="InAppPurchaseModal"
      component={InAppPurchaseModal}
      options={{headerShown: false, presentation: 'modal'}}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
