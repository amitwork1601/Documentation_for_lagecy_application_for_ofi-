# AnimalGenderRepository.php

**Path**: `src\Repository\AnimalGenderRepository.php`

## Summary
The `AnimalGenderRepository` is a Doctrine ORM repository that manages database queries for the `AnimalGender` entity. It provides a specialized `findByName()` method to retrieve animal gender records by their translated name in a specific locale, utilizing Sylius' translatable entity feature to support multilingual gender classifications. This enables locale-aware lookups of animal gender data throughout the application.

## Classes
- `AnimalGenderRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

