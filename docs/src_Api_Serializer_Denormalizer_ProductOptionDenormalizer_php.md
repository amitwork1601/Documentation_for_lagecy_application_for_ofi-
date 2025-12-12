# ProductOptionDenormalizer.php

**Path**: `src\Api\Serializer\Denormalizer\ProductOptionDenormalizer.php`

## Summary
This denormalizer handles the conversion of API request data into `ProductOption` entities in a Sylius-based e-commerce application. It manages the special processing of product option values during deserialization, likely handling relationships between product options and their associated values (e.g., converting IRIs to entity references) before delegating to the standard denormalizer. The class uses a guard pattern (`ALREADY_CALLED`) to prevent recursive denormalization loops when processing nested product option data.

## Classes
- `ProductOptionDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null`

