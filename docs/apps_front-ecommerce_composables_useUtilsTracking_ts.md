# useUtilsTracking.ts

**Path**: `apps\front-ecommerce\composables\useUtilsTracking.ts`

## Summary
This composable provides utility functions for Google Tag Manager (GTM) tracking and analytics in an e-commerce application. It transforms user data, product data, and cart information from the application's internal format (Sylius/Strapi models) into standardized GTM event tracking format, including user identification, login status, subscription status, and product metadata for analytics purposes.

## Interfaces
- `ISourceItemList`

## Type Aliases
- `TTrackingSyliusProductInput`
- `TTrackingProductInput`
- `TTrackingProductOutput`

## Function Details

### `useUtilsTracking`


### `getUserDataGTM`


### `getBrand`


### `getUserIdGTM`

- **Parameters**: `user: IUserPersonalData`

### `getLoginStatusGTM`

- **Parameters**: `isLogged: boolean`

### `getUserTypeGTM`

- **Parameters**: `isLogged: boolean, newCustomer?: boolean`

### `getUserLoggingType`

- **Parameters**: `isLogged: boolean`

### `getUserCurrency`


### `convertToDecimal`

- **Parameters**: `...values: (number | undefined)[]): number`

### `sum`

- **Parameters**: `values.reduce((acc: number, value`

