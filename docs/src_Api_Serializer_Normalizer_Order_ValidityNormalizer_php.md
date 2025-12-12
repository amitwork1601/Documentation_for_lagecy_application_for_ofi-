# ValidityNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\ValidityNormalizer.php`

## Summary
This normalizer enhances order serialization by adding validity check information to order objects during API responses. It checks cart/order validity rules and appends the validation results to the normalized order data when specific serialization groups are active (e.g., admin order views, shop cart display). The normalizer integrates with Sylius's order system to provide real-time validation feedback about whether an order meets configured business rules before processing.

## Classes
- `ValidityNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`

