# UpdReferenceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\UpdReferenceNormalizer.php`

## Summary
This normalizer enhances Order serialization by adding a formatted `updReference` field, which combines a configurable site prefix with the order ID (padded to 8 digits). It operates conditionally based on specific serialization groups (admin order views and webmethod reads) to ensure the UPD reference is only included in relevant API contexts.

## Classes
- `UpdReferenceNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

