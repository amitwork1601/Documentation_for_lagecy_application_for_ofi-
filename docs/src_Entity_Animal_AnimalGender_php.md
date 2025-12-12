# AnimalGender.php

**Path**: `src\Entity\Animal\AnimalGender.php`

## Summary
This entity class represents an animal gender classification in a Sylius-based application with multi-language support. It serves as a translatable resource that can be queried via GraphQL API, storing gender options (like male, female, etc.) with timestamps and priority ordering for animals in the system. The class implements Sylius resource and translatable interfaces to enable localized gender labels across different languages while maintaining a consistent data structure through Doctrine ORM.

## Classes
- `AnimalGender`

## Function Details

### `__construct`


### `getId`


### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalGenderTranslation
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

