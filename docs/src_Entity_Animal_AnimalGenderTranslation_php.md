# AnimalGenderTranslation.php

**Path**: `src\Entity\Animal\AnimalGenderTranslation.php`

## Summary
This entity class manages translations of animal gender names in different locales, extending Sylius's translation framework. It stores localized versions of gender names (e.g., "Male", "Female" in different languages) in the `sylius_animal_gender_translation` table, with a unique constraint ensuring one translation per locale per gender. The class exposes GraphQL query operations via API Platform while disabling REST operations, enabling multilingual support for animal gender classification in what appears to be a pet/animal management system.

## Classes
- `AnimalGenderTranslation`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

