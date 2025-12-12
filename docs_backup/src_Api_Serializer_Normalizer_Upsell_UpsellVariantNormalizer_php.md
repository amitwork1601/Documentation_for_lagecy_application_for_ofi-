# UpsellVariantNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Upsell\UpsellVariantNormalizer.php`

## Summary
This normalizer customizes the API serialization of `UpSellVariant` entities for e-commerce upselling features in a Sylius-based application. It enriches the normalized data by calculating variant prices through a price calculator and adding product information via the `UpSellService`, with support for both shop and admin API contexts distinguished by serialization groups.

## Classes
- `UpsellVariantNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

