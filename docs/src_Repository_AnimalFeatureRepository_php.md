# AnimalFeatureRepository.php

**Path**: `src\Repository\AnimalFeatureRepository.php`

## Summary
This repository manages database queries for the `AnimalFeature` entity, extending Sylius's base repository functionality. It provides a specialized `findByName()` method that retrieves animal features by their translated name in a specific locale, using a query that joins with the translations table to support multilingual feature lookups.

## Classes
- `AnimalFeatureRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

