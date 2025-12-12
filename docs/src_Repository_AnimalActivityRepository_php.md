# AnimalActivityRepository.php

**Path**: `src\Repository\AnimalActivityRepository.php`

## Summary
This repository class provides database access methods for the `AnimalActivity` entity, extending Sylius's base entity repository. Its primary function is to query animal activities by name in a specific locale, utilizing Doctrine's query builder to join translation entities and filter results based on both the translated name and locale parameters.

## Classes
- `AnimalActivityRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

