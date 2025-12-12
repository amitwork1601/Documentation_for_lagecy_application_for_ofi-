# OrderConfirmationEmailTransformer.php

**Path**: `src\DataTransformer\Messenger\OrderConfirmationEmailTransformer.php`

## Summary
The `OrderConfirmationEmailTransformer` class transforms order entities into structured array data specifically formatted for order confirmation emails. It implements Symfony's `DataTransformerInterface` to extract and format order details including customer information, product variants, pricing (with/without taxes), subscription intervals, and promotional adjustments, while handling money formatting and internationalization through injected services.

## Classes
- `OrderConfirmationEmailTransformer`

## Function Details

### `transform`

- **Parameters**: `$value`

### `reverseTransform`

- **Parameters**: `$value`

