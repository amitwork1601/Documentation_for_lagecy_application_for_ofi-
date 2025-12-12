# AnimalConditionRepository.php

**Path**: `src\Repository\AnimalConditionRepository.php`

## Summary
This repository class provides database access methods for the `AnimalCondition` entity in an animal management system. Its main functionality is the `findByName()` method, which retrieves an animal condition by searching its translated name in a specific locale, using a query that joins the entity with its translation table to support multilingual condition names.

## Classes
- `AnimalConditionRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

