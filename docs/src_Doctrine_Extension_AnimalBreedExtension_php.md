# AnimalBreedExtension.php

**Path**: `src\Doctrine\Extension\AnimalBreedExtension.php`

## Summary
The `AnimalBreedExtension` is a Doctrine ORM query extension for API Platform that automatically modifies collection queries for the `AnimalBreed` entity. It specifically targets GET collection operations on shop and admin routes, adding an inner join with breed translations and ordering results alphabetically by the translated breed name based on the current locale. This ensures that animal breed listings are properly localized and consistently sorted across the application's API endpoints.

## Classes
- `AnimalBreedExtension`

