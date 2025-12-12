# TalonOneCollectionDenormalizer.php

**Path**: `src\TalonOne\Serializer\TalonOneCollectionDenormalizer.php`

## Summary
This class is a custom Symfony serializer denormalizer that handles responses from the TalonOne API (a promotion and loyalty platform) by extracting data from a nested collection structure. It specifically unwraps the 'data' property from TalonOne API responses when the 'talon_one_collection' context flag is set, allowing the underlying denormalizer to process the actual payload without the wrapper.

## Classes
- `TalonOneCollectionDenormalizer`

## Function Details

### `denormalize`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`

