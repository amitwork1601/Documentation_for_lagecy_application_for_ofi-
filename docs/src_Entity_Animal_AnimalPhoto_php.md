# AnimalPhoto.php

**Path**: `src\Entity\Animal\AnimalPhoto.php`

## Summary
The `AnimalPhoto` entity represents a photo associated with an animal in a Sylius-based application. It manages the one-to-one relationship between animals and their photos, storing file metadata (file ID, filename, and hash) along with timestamps for creation and modification. The class is exposed via GraphQL API (with query and collection operations) and uses Doctrine ORM for database persistence in the `sylius_animal_photo` table.

## Classes
- `AnimalPhoto`

## Function Details

### `getId`


### `getAnimal`


### `setAnimal`

- **Parameters**: `Animal $animal`

### `getFileId`


### `setFileId`

- **Parameters**: `$fileId`

### `getFileName`


### `setFileName`

- **Parameters**: `$fileName`

### `getHash`


### `setHash`

- **Parameters**: `?string $hash`

