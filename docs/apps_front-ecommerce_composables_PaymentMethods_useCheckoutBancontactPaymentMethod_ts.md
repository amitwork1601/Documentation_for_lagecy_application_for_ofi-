# useCheckoutBancontactPaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\useCheckoutBancontactPaymentMethod.ts`

## Summary
This composable implements the Bancontact payment method integration for an e-commerce checkout flow. It handles the complete payment lifecycle including submission to the backend, managing 3D Secure redirects via session IDs, and polling the payment state endpoint until the transaction completes or fails. The code provides a standardized interface (IComposablePaymentMethod) for integrating Bancontact as a payment option alongside other payment methods in the checkout system.

## Function Details

### `useCheckoutBancontactPaymentMethod`


### `isAvailable`


### `getConfiguration`


### `getComponent`


### `handleRedirect`

- **Parameters**: `cart: IOrder, _route: RouteLocationRaw`

### `submit`

- **Parameters**: `cart: IOrder`

