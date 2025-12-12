# AnimalsTypeNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\AnimalsTypeNormalizer.php`

## Summary
This normalizer enhances customer serialization by adding animal type information to the customer data representation. It decorates the standard customer normalization process by injecting the customer's associated animal types using the `AnimalsTypeService`, which is conditionally applied based on specific serialization groups (shop/admin customer read operations). The normalizer follows Symfony's serializer decorator pattern to extend customer data without modifying the core customer entity serialization.

## Classes
- `AnimalsTypeNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @param CustomerInterface $object

@throws ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

