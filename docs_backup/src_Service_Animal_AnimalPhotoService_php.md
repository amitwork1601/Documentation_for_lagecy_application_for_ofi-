# AnimalPhotoService.php

**Path**: `src\Service\Animal\AnimalPhotoService.php`

## Summary
The `AnimalPhotoService` manages the uploading and persistence of animal photos using the ImageKit CDN service. It handles converting uploaded files to base64, uploading them to ImageKit with specific naming conventions (using animal ID), and creating or updating `AnimalPhoto` entities that are associated with `Animal` entities in the database.

## Classes
- `AnimalPhotoService`

## Function Details

### `savePhoto`

- **Parameters**: `UploadedFile $file, Animal $animal`

### `deletePhoto`

- **Parameters**: `Animal $animal`

