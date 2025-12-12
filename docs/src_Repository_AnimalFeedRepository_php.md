# AnimalFeedRepository.php

**Path**: `src\Repository\AnimalFeedRepository.php`

## Summary
The `AnimalFeedRepository` is a custom Doctrine repository for querying `AnimalFeed` entities from the database. Its primary functionality is to retrieve animal feed records by their translated name in a specific locale, using a join with the translations table to support multi-language lookups. This enables the application to search for animal feed products using localized names rather than just IDs or database-level identifiers.

## Classes
- `AnimalFeedRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

