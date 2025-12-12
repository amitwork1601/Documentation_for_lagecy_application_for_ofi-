# WebMethodNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\WebMethodNormalizer.php`

## Summary
This normalizer is responsible for serializing incomplete Order entities for the "webmethod" API context by adding a custom `isRecurringOrder` field to the standard normalized output. It only activates for orders that haven't completed checkout and when the `webmethod:order:read` serialization group is present, preventing duplicate processing through the `ALREADY_CALLED` flag.

## Classes
- `WebMethodNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

