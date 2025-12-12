# usePayzenPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\usePayzenPaymentMethod.ts`

## Summary
This code implements a composable for integrating Payzen payment gateway functionality in an e-commerce application. It provides methods for payment configuration retrieval, component loading, and payment instrument management, specifically handling payment submissions during checkout and subscription payment method updates. The composable serves as an adapter between the front-end payment UI and backend payment processing, with special support for subscription-based payments through the `updateSubscription` method that patches payment instruments with Payzen tokens.

## Function Details

### `usePayzenPaymentMethod`


### `isAvailable`


### `getConfiguration`

- **Parameters**: `paymentOfferConfig: IPaymentOfferConfig`

### `getComponent`


### `isRedirected`


### `submit`


