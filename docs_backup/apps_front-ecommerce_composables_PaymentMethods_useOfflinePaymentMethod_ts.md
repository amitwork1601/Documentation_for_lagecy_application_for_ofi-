# useOfflinePaymentMethod.ts

**Path**: `apps\front-ecommerce\composables\PaymentMethods\useOfflinePaymentMethod.ts`

## Summary
This composable implements an offline payment method handler for an e-commerce checkout flow. It provides the necessary interface methods (availability check, configuration, UI component, and submission) to complete orders using payment methods that don't require immediate online processing, such as cash on delivery or bank transfers. When submitted, it calls the backend API to mark the order as complete without any payment gateway integration or redirect flow.

## Function Details

### `useOfflinePaymentMethod`


### `isAvailable`


### `getConfiguration`


### `getComponent`


### `isRedirected`


### `submit`

- **Parameters**: `cart: IOrder`

