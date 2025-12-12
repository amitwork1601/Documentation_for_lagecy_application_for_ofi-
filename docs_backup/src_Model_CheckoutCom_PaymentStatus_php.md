# PaymentStatus.php

**Path**: `src\Model\CheckoutCom\PaymentStatus.php`

## Summary
This class defines and manages payment status constants for Checkout.com payment gateway integration. It provides a set of static string properties representing various payment states (Pending, Authorized, Captured, Refunded, etc.) and utility methods to check payment status categories such as failed, canceled, authorized, processing, completed, refunded, and error states. The class serves as a domain model for interpreting and categorizing Checkout.com payment statuses within the application's payment processing workflow.

## Classes
- `PaymentStatus`

## Function Details

### `isFailed`

- **Parameters**: `string $status`

### `isCanceled`

- **Parameters**: `string $status`

### `isAuthorized`

- **Parameters**: `string $status`

### `isProcessing`

- **Parameters**: `string $status`

### `isCompleted`

- **Parameters**: `string $status`

### `isRefunded`

- **Parameters**: `string $status`

### `isError`

- **Parameters**: `string $status`

