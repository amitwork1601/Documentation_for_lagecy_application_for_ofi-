# TalonOneArrayDenormalizer.php

**Path**: `src\TalonOne\Serializer\TalonOneArrayDenormalizer.php`

## Summary
This class is a custom Symfony serializer denormalizer specifically for handling TalonOne integration data. It provides a pass-through denormalizer that returns array data unchanged when the `talon_one_array` context flag is set to true, effectively bypassing normal denormalization processing for TalonOne-specific array payloads while maintaining compatibility with Symfony's serialization component.

## Classes
- `TalonOneArrayDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

