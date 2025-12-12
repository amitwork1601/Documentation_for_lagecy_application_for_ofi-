# AnimalFeature.php

**Path**: `src\Entity\Animal\AnimalFeature.php`

## Summary
The `AnimalFeature` entity represents a translatable feature or characteristic that can be associated with animals in the system (e.g., "hypoallergenic", "good with children"). It implements Sylius resource patterns with multi-language support through translations, and exposes GraphQL query operations via API Platform for retrieving feature data. The entity includes timestampable behavior for tracking creation/updates and a priority field for ordering features, serving as a core domain model for categorizing and describing animal attributes in what appears to be a pet/animal management system.

## Classes
- `AnimalFeature`

## Function Details

### `__construct`


### `getId`


### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalFeatureTranslation
/

### `createTranslation`


### `getName`


### `setName`

- **Parameters**: `?string $name`

### `__toString`


### `getTranslationClass`


### `getPriority`


### `setPriority`

- **Parameters**: `?int $priority`

