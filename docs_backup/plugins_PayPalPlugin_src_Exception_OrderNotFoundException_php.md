# OrderNotFoundException.php

**Path**: `plugins\PayPalPlugin\src\Exception\OrderNotFoundException.php`

## Summary
This is a custom exception class for the Sylius PayPal plugin that handles order lookup failures. It provides factory methods to create specific exception instances when orders cannot be found either by their token or ID, with appropriately formatted error messages for each case.

## Classes
- `OrderNotFoundException`

## Function Details

### `__construct`

- **Parameters**: `?string $message = null`

### `withToken`

- **Parameters**: `string $token`

### `withId`

- **Parameters**: `int $id`

