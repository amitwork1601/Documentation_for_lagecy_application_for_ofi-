# AddressBookNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\AddressBookNormalizer.php`

## Summary
This normalizer customizes the serialization of customer address book data in a Sylius e-commerce API. It wraps the standard normalization process to ensure customer addresses are properly serialized as an array of values (rather than a keyed collection) when specific serialization groups are active, while gracefully handling channel-related errors that may occur during address normalization.

## Classes
- `AddressBookNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

