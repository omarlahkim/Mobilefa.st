import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {NAVIGATION} from 'src/enums/navigation';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

function navigateToEmailLogin() {
  navigate(NAVIGATION.EMAIL_LOGIN);
}
function navigateToMainLogin() {
  navigate(NAVIGATION.LOGIN);
}
function navigateToSignUp() {
  navigate(NAVIGATION.SIGNUP);
}
function navigateToProfile() {
  navigate(NAVIGATION.PROFILE);
}
function navigateToSettings() {
  navigate(NAVIGATION.SETTINGS);
}
function navigateToHome() {
  navigate(NAVIGATION.HOME);
}
function navigateToPurchaseModal() {
  navigate(NAVIGATION.PURCHASE_MODAL);
}

export {
  navigate,
  goBack,
  navigateToEmailLogin,
  navigateToMainLogin,
  navigateToSignUp,
  navigateToProfile,
  navigateToSettings,
  navigateToHome,
  navigateToPurchaseModal,
};
