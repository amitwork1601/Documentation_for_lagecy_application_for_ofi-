# cart.ts

**Path**: `apps\storybook\stores\cart.ts`

## Summary
This file defines a Pinia store for managing shopping cart state in an e-commerce Storybook application. It maintains cart data (token, order details, and update status) and provides a hardcoded list of subscription frequency options ranging from no subscription to various intervals (3 weeks to 10 weeks). The store serves as a centralized state management solution for cart operations, including support for recurring order subscriptions with predefined delivery frequencies.

## Function Details

### `loadCart`


### `getCart`


### `addItemToCart`


### `removeItemFromCart`


### `updateQuantity`


### `getFrequencies`


### `getFrequencyLabel`

- **Parameters**: `frequencyCode: string | number`

### `addCouponCode`

- **Parameters**: `_: unknown`

### `useCartStore`

- **Parameters**: `defineStore('cart', (`

