# UpdateInstrumentResponse.php

**Path**: `src\Api\Dto\UpdateInstrumentResponse.php`

## Summary
This DTO (Data Transfer Object) encapsulates the response data for payment instrument update operations in a customer payment system. It contains the operation result status, the updated PaymentInstrument entity (if successful), and an optional redirection URL (likely for additional authentication flows like 3D Secure or payment provider verification pages).

## Classes
- `UpdateInstrumentResponse`

## Function Details

### `__construct`

- **Parameters**: `bool $result, ?PaymentInstrument $instrument, ?string $redirection = null`

