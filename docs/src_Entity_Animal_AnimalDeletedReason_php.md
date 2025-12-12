# AnimalDeletedReason.php

**Path**: `src\Entity\Animal\AnimalDeletedReason.php`

## Summary
The `AnimalDeletedReason` entity represents predefined reasons for why an animal record was deleted or removed from the system. It serves as a translatable, timestampable reference data entity that stores reason codes with priorities and a default flag, exposed through GraphQL API for querying deletion reasons in an animal management application.

## Classes
- `AnimalDeletedReason`

## Function Details

### `__construct`


### `getId`


### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `isDefaultReason`


### `setDefaultReason`

- **Parameters**: `?bool $defaultReason`

### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalDeletedReasonTranslation
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

