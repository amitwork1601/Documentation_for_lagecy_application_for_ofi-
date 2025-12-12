# customer.ts

**Path**: `apps\front-ecommerce\stores\customer.ts`

## Summary
This code defines a Pinia store for managing customer authentication and user data in an e-commerce application. It handles JWT-based authentication flows including login, registration, password management (reset/forgot/edit), token refresh mechanisms, and user profile/preferences management. The store persists authentication tokens and customer data using browser storage, integrates with a cart store, and includes tracking events for login/logout actions.

## Function Details

### `getCartStore`


### `promisedToken`

- **Parameters**: `strict = true`

### `getTokenOrRefresh`

- **Parameters**: `tokenStr: string`

### `keepInitialNavigation`

- **Parameters**: `url: string`

### `retrieveInitialNavigationAndForget`


### `createCustomer`

- **Parameters**: `registerRequest: TRegisterRequest`

### `authenticate`

- **Parameters**: `authData: TLoginRequest`

### `logout`


### `getPersonalData`


### `resetPassword`

- **Parameters**: `resetPasswordData: TResetPasswordData`

### `editPassword`

- **Parameters**: `data: TEditPasswordData`

### `getAddresses`


### `getAddress`

- **Parameters**: `addressId: string`

### `setDefaultAddress`

- **Parameters**: `addressId: string`

### `saveAddress`

- **Parameters**: `address: ICustomerAddress`

### `deleteAddress`

- **Parameters**: `addressId: number`

### `refresh`


### `subscribeToTokenRefresh`


### `useCustomerStore`

- **Parameters**: `defineStore('customer', (`

### `userFullName`

- **Parameters**: `computedAsync(async (`

### `userComputed`

- **Parameters**: `computedAsync(async (`

