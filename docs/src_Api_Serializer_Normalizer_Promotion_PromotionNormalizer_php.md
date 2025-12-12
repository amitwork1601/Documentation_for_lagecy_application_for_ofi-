# PromotionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Promotion\PromotionNormalizer.php`

## Summary
The `PromotionNormalizer` class is a Symfony serializer normalizer that customizes the API representation of Promotion entities. It enhances the normalized promotion data by adding a `deletable` flag (to indicate if the promotion can be safely deleted), converting the channels array to indexed values, and replacing the promotion name with its label when accessed through the Shop API section.

## Classes
- `PromotionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

