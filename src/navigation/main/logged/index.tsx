import React from 'react';
import InAppPurchaseModal from 'src/components/ui/modals/inapppurchase';
import {MainStack} from 'src/navigation/stacks';
import {BottomTabNavigator} from './bottomtab';

const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      options={{headerShown: false}}
      name="LoggedInNavigator"
      component={BottomTabNavigator}
    />
    <MainStack.Screen
      name="PurchaseModal"
      component={InAppPurchaseModal}
      options={{headerShown: false, presentation: 'modal'}}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
