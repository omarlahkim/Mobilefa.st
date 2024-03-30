import {AppEventsLogger} from 'react-native-fbsdk-next';

const {} = AppEventsLogger.AppEvents;

const {logEvent, logPurchase} = AppEventsLogger;

// Custom Event
export function logCustomEventEvent(eventName: string, parameters: any) {
  logEvent(eventName, parameters);
}

// Purchase Event
export function logPurchaseEvent(
  purchaseAmount: number,
  currency: string,
  parameters: any,
) {
  logPurchase(purchaseAmount, currency, parameters);
}
