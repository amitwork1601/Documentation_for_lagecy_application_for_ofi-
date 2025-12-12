# WebmethodNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\WebmethodNormalizer.php`

## Summary
The `WebmethodNormalizer` class is a Symfony serializer normalizer specifically designed to customize the serialization of `Subscription` entities for the Webmethod integration. It enriches the normalized subscription data by adding draft order financial information (`draftTotal` and `shippingTotal`) when a draft order exists, operating within the `webmethod:order:read` serialization group context.

## Classes
- `WebmethodNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`

