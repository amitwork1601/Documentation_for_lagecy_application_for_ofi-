# UpdReferenceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\UpdReferenceNormalizer.php`

## Summary
This normalizer enhances Customer entity serialization by adding a formatted `updReference` field (a unique customer reference combining a prefix and zero-padded customer ID) to the serialized output. It operates selectively based on specific serialization groups (admin order views, webmethod order/customer reads) and handles cases where channel context is unavailable by omitting the reference field.

## Classes
- `UpdReferenceNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `getPrefix`

- **Parameters**: `CustomerInterface $object`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

