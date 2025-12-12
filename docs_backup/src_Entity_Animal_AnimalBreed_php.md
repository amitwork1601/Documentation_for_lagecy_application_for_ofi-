# AnimalBreed.php

**Path**: `src\Entity\Animal\AnimalBreed.php`

## Summary
The `AnimalBreed` entity represents different breeds of animals in a veterinary or animal management system. It serves as a translatable, timestampable Doctrine entity that stores breed information including a unique code, associated animal type, and adult age threshold, with GraphQL API support for querying breed data. The class implements Sylius resource patterns to enable multi-language breed names and integrates with API Platform for exposing breed information through a GraphQL interface.

## Classes
- `AnimalBreed`

## Function Details

### `__construct`


### `getId`


### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalBreedTranslation
/

### `createTranslation`


### `getName`


### `setName`

- **Parameters**: `?string $name`

### `getType`


### `setType`

- **Parameters**: `AnimalType $type`

### `getAdultAge`


### `setAdultAge`

- **Parameters**: `?int $adultAge`

### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getTypeName`


### `__toString`


### `getTranslationClass`


### `getPriority`


### `setPriority`

- **Parameters**: `?int $priority`

