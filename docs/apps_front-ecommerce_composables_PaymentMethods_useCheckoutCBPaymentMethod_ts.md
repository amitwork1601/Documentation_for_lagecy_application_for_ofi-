# useCheckoutCBPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\useCheckoutCBPaymentMethod.ts`

## Summary
This composable provides payment method functionality for credit card (CB - Carte Bancaire) payments in an e-commerce checkout flow. It implements interfaces for both standard checkout and subscription-based payments, offering methods to check availability, retrieve payment configuration (including customer billing details from cart data), and load the payment form component. The composable integrates with the customer store and backend API to manage payment instrument configuration and processing.

## Function Details

### `useCheckoutCBPaymentMethod`


### `isAvailable`


### `getComponent`


### `handleRedirect`

- **Parameters**: `cart: IOrder, _route: RouteLocationRaw`

