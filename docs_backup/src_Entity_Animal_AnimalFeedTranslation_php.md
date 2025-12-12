# AnimalFeedTranslation.php

**Path**: `src\Entity\Animal\AnimalFeedTranslation.php`

## Summary
This entity class represents translated versions of animal feed names in different locales, extending Sylius's translation framework. It stores locale-specific string values for the `name` field of `AnimalFeed` entities, using Doctrine ORM to maintain a one-to-many relationship with the parent translatable entity through a unique constraint on `translatable_id` and `locale`. The class exposes GraphQL query operations via ApiPlatform while disabling REST operations, enabling multi-language support for animal feed data in the application.

## Classes
- `AnimalFeedTranslation`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

