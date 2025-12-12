# AnimalType.php

**Path**: `src\Entity\Animal\AnimalType.php`

## Summary
This class represents an AnimalType entity in a Sylius-based e-commerce system that categorizes animals. It implements translatable functionality to support multiple languages for animal type names/descriptions, includes timestampable behavior for tracking creation/modification dates, and exposes GraphQL query operations through ApiPlatform for retrieving animal type data. The entity uses Doctrine ORM for database persistence and includes a priority field for ordering/sorting animal types.

## Classes
- `AnimalType`

## Function Details

### `__construct`


### `getId`


### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalTypeTranslation
/

### `createTranslation`


### `getName`


### `setName`

- **Parameters**: `?string $name`

### `__toString`


### `getTranslationClass`


### `getPriority`


### `setPriority`

- **Parameters**: `?int $priority`

