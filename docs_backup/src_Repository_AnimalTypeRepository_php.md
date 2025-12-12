# AnimalTypeRepository.php

**Path**: `src\Repository\AnimalTypeRepository.php`

## Summary
This repository provides database access methods for the `AnimalType` entity, extending Sylius's base entity repository functionality. It implements a `findByName()` method that queries animal types by their translated name in a specific locale, utilizing Doctrine's query builder to join with translation entities and filter by both name and locale parameters.

## Classes
- `AnimalTypeRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

