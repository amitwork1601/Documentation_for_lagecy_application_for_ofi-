# DateTimeDenormalizer.php

**Path**: `src\Api\Serializer\Denormalizer\DateTimeDenormalizer.php`

## Summary
This class is a custom Symfony serializer denormalizer that converts string date representations into PHP `DateTime` objects during API request deserialization. It specifically handles timezone conversion by setting the resulting DateTime object to the server's default timezone, ensuring consistent datetime handling across the application's API layer.

## Classes
- `DateTimeDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `$data, $class, $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null`

