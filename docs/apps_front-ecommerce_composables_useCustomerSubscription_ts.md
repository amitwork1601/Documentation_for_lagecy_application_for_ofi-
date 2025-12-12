# useCustomerSubscription.ts

**Path**: `apps\front-ecommerce\composables\useCustomerSubscription.ts`

## Summary
This composable manages customer subscription operations in an e-commerce application, including subscription modifications, payment method updates, and product management for recurring orders. It provides functionality to add/remove products from subscription draft orders, update billing information and shipping methods, cancel subscriptions, and handle payment instrument changes through integrated payment providers (Payzen and Checkout.com). The composable serves as a centralized interface for all subscription-related API calls and state management, utilizing the customer store and backend fetching utilities.

## Interfaces
- `IBillingData`
- `IComposablePaymentSubscriptionMethod`

## Type Aliases
- `TDefineAsyncComponent`

## Function Details

### `getSubscriptions`


### `getSubscription`

- **Parameters**: `code: string`

### `getSubscriptionOrders`

- **Parameters**: `code: string`

### `getSubscriptionShippingDate`

- **Parameters**: `{ code }: { code: string }`

### `setSubscriptionForcePayment`

- **Parameters**: `{ code }: { code: string }`

### `submitSubscriptionPaymentMethod`

- **Parameters**: `paymentMethodCode: string`

### `useCustomerSubscription`


