# ProcessPaymentResponse.php

**Path**: `src\Gateway\Model\ProcessPaymentResponse.php`

## Summary
The `ProcessPaymentResponse` class is a data transfer object (DTO) that encapsulates the outcome of a payment processing operation in a payment gateway. It holds payment result data including success status, redirect URL for payment confirmation/completion pages, error messages for failed transactions, and HTTP status codes. The class automatically sets the status code to HTTP_ACCEPTED (202) when a redirect URL is provided, indicating an asynchronous payment flow that requires user redirection.

## Classes
- `ProcessPaymentResponse`

## Function Details

### `isSuccess`


### `setSuccess`

- **Parameters**: `bool $success`

### `getRedirectUrl`


### `setRedirectUrl`

- **Parameters**: `?string $redirectUrl`

### `getErrorMessage`


### `setErrorMessage`

- **Parameters**: `?string $errorMessage`

### `getStatusCode`


### `setStatusCode`

- **Parameters**: `?int $statusCode`

### `getStatus`


### `setStatus`

- **Parameters**: `?string $status`

