# AnimalBreedRepository.php

**Path**: `src\Repository\AnimalBreedRepository.php`

## Summary
The `AnimalBreedRepository` is a custom Doctrine repository that provides specialized query methods for retrieving animal breed entities from the database. It implements two main query methods: `findByNamePart()` which searches for up to 20 breeds matching a partial name string filtered by animal type, and `findByCode()` which retrieves a breed by its ID. This repository exists to support autocomplete/search functionality for animal breeds in a pet/animal management system, likely used in forms where users need to select breeds specific to different animal types.

## Classes
- `AnimalBreedRepository`

## Function Details

### `findByNamePart`

- **Parameters**: `$name, $animalTypeId`

### `findByCode`

- **Parameters**: `string $code`

