# AnimalDeletedReasonRepository.php

**Path**: `src\Repository\AnimalDeletedReasonRepository.php`

## Summary
This repository manages database queries for `AnimalDeletedReason` entities, which track reasons why animals are removed from the system. It provides specialized query methods to find deletion reasons by their translated name in a specific locale, and to retrieve the default deletion reason when one is configured.

## Classes
- `AnimalDeletedReasonRepository`

## Function Details

### `findByName`

- **Parameters**: `string $name, string $locale`

### `findDefaultReason`


