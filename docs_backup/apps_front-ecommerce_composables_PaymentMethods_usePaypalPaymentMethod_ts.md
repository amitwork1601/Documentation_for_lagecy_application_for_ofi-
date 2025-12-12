# usePaypalPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\usePaypalPaymentMethod.ts`

## Summary
This composable implements the PayPal payment method integration for the e-commerce checkout process. It provides a standard interface for handling PayPal payments by exposing methods to check availability, retrieve PayPal configuration, load the payment form component, and submit payment completion requests to the backend API with PayPal transaction details (orderID, payerID). The composable acts as an adapter between the checkout system and PayPal's payment flow, sending the finalized payment information to complete the order.

## Function Details

### `usePaypalPaymentMethod`


### `isAvailable`


### `getConfiguration`

- **Parameters**: `paymentOfferConfig: IPaymentOfferConfig`

### `getComponent`


### `isRedirected`


