# UuidOrderNumberGenerator.php

**Path**: `src\Order\Generator\UuidOrderNumberGenerator.php`

## Summary
This class implements a UUID-based order number generator for the Sylius e-commerce framework. It generates unique order numbers by creating a UUID v4, converting it to base32 format, and truncating it to a configurable length (default 10 characters), providing collision-resistant order identifiers that are shorter and more user-friendly than full UUIDs.

## Classes
- `UuidOrderNumberGenerator`

## Function Details

### `__construct`

- **Parameters**: `private int $length = 10`

### `generate`

- **Parameters**: `OrderInterface $order`

