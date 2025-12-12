# AnimalsNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\AnimalsNormalizer.php`

## Summary
The `AnimalsNormalizer` is a Symfony serializer normalizer that extends the serialization of Customer entities by adding their associated animals collection to the normalized output. It operates within specific serialization groups (defaulting to 'webmethod:customer:read') and gracefully handles cases where channel context is unavailable by omitting the animals data, preventing the normalizer from being applied multiple times through a context flag.

## Classes
- `AnimalsNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

