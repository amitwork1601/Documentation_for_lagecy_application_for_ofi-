# useCheckout.ts

**Path**: `apps\front-ecommerce\composables\useCheckout.ts`

## Summary
This TypeScript composable manages the e-commerce checkout process, orchestrating cart-to-order conversion and payment processing. It integrates multiple payment methods (Payzen, PayPal, Checkout.com variants including CB/Bancontact/GooglePay/ApplePay, and offline payments) while handling shipping methods, customer addresses, and pickup points throughout the checkout flow. The module coordinates between cart and customer stores, tracks checkout state progression, and implements order completion with error handling and tracking events.

## Interfaces
- `IComposablePaymentMethod`

## Type Aliases
- `WindowWithGTagData`

## Function Details

### `useCheckout`

- **Parameters**: `orderRef: string`

### `getAvailablePaymentMethods`


### `initialize`


### `loadCart`


### `saveAddress`

- **Parameters**: `address: ICustomerAddress`

### `submitShippingAddress`

- **Parameters**: `loading = true`

### `refreshAvailableShippingMethod`

- **Parameters**: `loading = true`

### `submitShippingMethod`


### `patchShipmentWithMethod`

- **Parameters**: `jwtToken?: string`

### `submitPaymentMethod`


### `submitPayment`

- **Parameters**: `method: IPaymentMethod, ...args: any[]`

### `submitFreePayment`

- **Parameters**: `freePaymentMethod: IPaymentMethod`

### `completeCheckout`


### `rollbackToAddress`


### `redirectToConfirmation`


### `detectExistingPaymentRedirect`


### `shippingStep`

- **Parameters**: `computed((`

### `stepOpened`

- **Parameters**: `computed((`

### `maySubmitShipping`

- **Parameters**: `computed((`

### `paymentFormConfiguration`

- **Parameters**: `computed((`

### `paymentFeesAdjustment`

- **Parameters**: `computed((`

### `hasPaymentFees`

- **Parameters**: `computed((`

### `isCartValid`

- **Parameters**: `computed((`

