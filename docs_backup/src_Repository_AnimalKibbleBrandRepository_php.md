# AnimalKibbleBrandRepository.php

**Path**: `src\Repository\AnimalKibbleBrandRepository.php`

## Summary
This repository class provides database query methods for animal kibble brand entities in what appears to be a pet food management system. It extends Sylius ResourceBundle's EntityRepository and implements two search methods: `findByNamePart()` for partial name matching (returning up to 20 results) and `findByCode()` for ID-based lookup, both returning only the brand's ID and name fields.

## Classes
- `AnimalKibbleBrandRepository`

## Function Details

### `findByNamePart`

- **Parameters**: `$name`

### `findByCode`

- **Parameters**: `string $code`

