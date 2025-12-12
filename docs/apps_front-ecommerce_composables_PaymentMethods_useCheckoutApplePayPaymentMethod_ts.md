# useCheckoutApplePayPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\useCheckoutApplePayPaymentMethod.ts`

## Summary
This composable implements Apple Pay as a payment method for an e-commerce checkout flow. It dynamically loads the Apple Pay SDK, checks if Apple Pay is available on the user's device/browser using `ApplePaySession.canMakePayments()`, and provides configuration for processing Apple Pay transactions. The module integrates with the customer store and backend fetching utilities to handle the payment authorization and order processing workflow.

## Type Aliases
- `WindowWithApplePay`

## Function Details

### `useCheckoutApplePayPaymentMethod`


### `isAvailable`


### `getConfiguration`

- **Parameters**: `paymentOfferConfig: IPaymentOfferConfig`

### `getComponent`


### `handleRedirect`

- **Parameters**: `cart: IOrder, _route: RouteLocationRaw`

### `submit`

- **Parameters**: `cart: IOrder, type: string, token_data: string`

