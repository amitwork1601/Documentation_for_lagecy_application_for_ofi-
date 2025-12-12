# OrderInfoShippingAddressEdit.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\shippingAddress\OrderInfoShippingAddressEdit.vue`

## Summary
This Vue component manages the editing of shipping and billing addresses for e-commerce orders and subscriptions. It allows users to select addresses from their address book, handles pickup point selection for alternative delivery methods, and provides functionality to update subscription addresses (both billing and shipping) while managing the UI state for edit mode, loading states, and address validation. The component integrates with the customer store and subscription management system to persist address changes and reload available shipping methods when addresses are modified.

## Function Details

### `loadAddresses`


### `loadShippingMethods`


### `saveNewAddress`

- **Parameters**: `address: ICustomerAddress`

### `checkIfBillingSameAsShipping`


### `updateBillingAddress`

- **Parameters**: `sameAsSubscription = false`

### `openSaveShippingDialog`


### `saveShippingMethodSubscription`


### `saveShippingMethodDraft`


### `addressesToSend`

- **Parameters**: `computed((`

### `maySubmitShipping`

- **Parameters**: `computed((`

