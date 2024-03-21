import {AppEventsLogger} from 'react-native-fbsdk-next';

// General Event
export function logEvent(name: string, parameters: any) {
  AppEventsLogger.logEvent(name, parameters);
}
const {
  AddedPaymentInfo,
  AdClick,
  AdImpression,
  AddedToWishlist,
  AddedToCart,
  SubmitApplication,
  ViewedContent,
} = AppEventsLogger.AppEvents;

// Custom Event

// Purchase Event
export function logPurchaseEvent(
  purchaseAmount: number,
  currency: string,
  parameters: any,
) {
  AppEventsLogger.logPurchase(purchaseAmount, currency, parameters);
}
//  Event

// Registration Event

// Registration Event

// Registration Event

// Registration Event

// Registration Event

// Registration Event

// Registration Event

// Registration Event
