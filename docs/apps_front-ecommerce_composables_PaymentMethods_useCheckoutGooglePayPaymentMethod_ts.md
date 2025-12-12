# useCheckoutGooglePayPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\useCheckoutGooglePayPaymentMethod.ts`

## Summary
This composable implements Google Pay as a payment method option during e-commerce checkout. It provides configuration management for Google Pay (including price, currency, and country code), handles payment redirect flows via Checkout.com session IDs, and polls the backend payment state endpoint until the transaction completes or fails. The composable integrates with the checkout system by exposing methods to check availability, load the payment form component, and process post-payment redirects.

## Function Details

### `useCheckoutGooglePayPaymentMethod`


### `isAvailable`


### `getComponent`


### `handleRedirect`

- **Parameters**: `cart: IOrder, _route: RouteLocationRaw`

### `submit`

- **Parameters**: `cart: IOrder, type: string, token_data: string`

