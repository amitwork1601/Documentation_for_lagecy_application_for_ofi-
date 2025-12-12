# UpdateAnonymousProfile.php

**Path**: `src\TalonOne\Domain\UseCase\UpdateAnonymousProfile.php`

## Summary
This class implements a use case for updating an anonymous customer profile in the TalonOne promotion engine system based on order data. It constructs an API request using the builder pattern via `UpdateAnonymousProfileRequestBuilder`, executes it through the integration client, and handles potential API errors by wrapping them in domain-specific exceptions. The functionality enables tracking and managing anonymous customer sessions for promotional campaigns without requiring authenticated user accounts.

## Classes
- `UpdateAnonymousProfile`

## Function Details

### `execute`

- **Parameters**: `Order $order`

