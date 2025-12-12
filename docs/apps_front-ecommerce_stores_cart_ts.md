# cart.ts

**Path**: `apps\front-ecommerce\stores\cart.ts`

## Summary
This file implements a Pinia store for managing an e-commerce shopping cart, handling operations like adding/removing items, updating quantities, and persisting cart state using local storage and broadcast channels for cross-tab synchronization. It integrates with a backend API to fetch and update cart data, manages cart tokens for session persistence, and includes support for subscription frequencies and customer authentication state. The store also defines a custom `CartError` class for cart-specific error handling with context preservation.

## Classes
- `CartError`

## Function Details

### `getCustomerStore`


### `loadCart`


### `getCart`

- **Parameters**: `ensureIfNotExist = true`

### `recoverCart`

- **Parameters**: `cartIri: string`

### `getFrequencies`


### `getFrequencyLabel`

- **Parameters**: `frequencyCode: string | number`

### `addCouponCode`

- **Parameters**: `couponCode: string`

### `removeCouponCode`

- **Parameters**: `couponCode: string`

### `assignCart`

- **Parameters**: `newCart: ICart | null`

### `assignCustomer`

- **Parameters**: `customerId: string`

### `deleteCart`

- **Parameters**: `tokenValue: string`

### `clear`

- **Parameters**: `tokenValue?: string`

### `addProductVariantQuantityFromQuery`


### `useCartStore`

- **Parameters**: `defineStore('cart', (`

