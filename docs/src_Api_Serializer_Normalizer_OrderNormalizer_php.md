# OrderNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\OrderNormalizer.php`

## Summary
The `OrderNormalizer` class is a custom serializer normalizer for Order entities in a Sylius e-commerce application. Its primary purpose is to intercept the normalization process of Order objects and ensure that the 'adjustments' array (containing price modifications like discounts, taxes, shipping costs) is reindexed with sequential numeric keys using `array_values()`, preventing potential serialization issues with non-sequential array keys. The class uses a guard flag (`ALREADY_CALLED`) to prevent infinite recursion by delegating to the default normalizer after making this specific adjustment.

## Classes
- `OrderNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

