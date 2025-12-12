# AnimalActivityTranslation.php

**Path**: `src\Entity\Animal\AnimalActivityTranslation.php`

## Summary
This entity class represents translated versions of animal activity names in different locales, extending Sylius's translation framework. It stores localized `name` values for animal activities in a database table with a unique constraint ensuring one translation per locale per activity. The class is exposed via GraphQL API (query operations only) to allow retrieving activity names in multiple languages as part of a multi-language animal management system.

## Classes
- `AnimalActivityTranslation`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

