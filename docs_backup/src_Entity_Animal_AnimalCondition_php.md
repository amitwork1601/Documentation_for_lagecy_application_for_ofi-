# AnimalCondition.php

**Path**: `src\Entity\Animal\AnimalCondition.php`

## Summary
The `AnimalCondition` entity represents different conditions or states that animals can have in a shelter/rescue management system (e.g., healthy, injured, under treatment). It implements a translatable Sylius resource with support for GraphQL queries, storing a unique condition code, priority ordering, and an optional icon, with translations for localized condition names/descriptions stored separately in the `AnimalConditionTranslation` entity.

## Classes
- `AnimalCondition`

## Function Details

### `__construct`


### `getId`


### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalConditionTranslation
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

### `getIcon`


### `setIcon`

- **Parameters**: `?string $icon`

