# useCustomerOrders.ts

**Path**: `apps\front-ecommerce\composables\useCustomerOrders.ts`

## Summary
This composable provides functionality for fetching and managing customer order data in an e-commerce application. It offers methods to retrieve individual orders by token, paginated order listings, and formatted order options for display (with localized pricing and dates), all authenticated via JWT tokens from the customer store. The composable serves as an abstraction layer between the frontend components and the backend order API endpoints.

## Function Details

### `getOrder`

- **Parameters**: `tokenValue: string`

### `getOrdersOptions`


### `useCustomerOrders`

- **Parameters**: `nuxtApp?: NuxtApp`

### `getPriceWithCurrency`

- **Parameters**: `total: number`

### `getDateToDisplay`

- **Parameters**: `date: string`

### `getOrderProducts`

- **Parameters**: `token: string | number`

### `getOrderInvoice`

- **Parameters**: `token: string | undefined`

