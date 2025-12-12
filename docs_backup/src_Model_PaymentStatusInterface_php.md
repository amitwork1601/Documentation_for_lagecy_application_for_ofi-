# PaymentStatusInterface.php

**Path**: `src\Model\PaymentStatusInterface.php`

## Summary
This interface defines a contract for payment status checking in the application's domain model. It provides three static methods to determine whether a payment is in a failed, processing, or completed state, and defines a constant for error status. This abstraction allows different payment gateway implementations to standardize how payment statuses are interpreted and validated across the system.

## Function Details

### `isFailed`

- **Parameters**: `string $status`

### `isProcessing`

- **Parameters**: `string $status`

### `isCompleted`

- **Parameters**: `string $status`

