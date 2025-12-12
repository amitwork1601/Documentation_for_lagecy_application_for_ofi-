# AnimalActivity.php

**Path**: `src\Entity\Animal\AnimalActivity.php`

## Summary
The `AnimalActivity` entity represents different types of activities associated with animals in a zoo/animal management system. It serves as a translatable, API-accessible resource that categorizes animal behaviors or actions, storing properties like a unique code, priority level, icon, and relationship to an animal type, with support for multi-language translations through Sylius's translatable trait and GraphQL query operations via API Platform.

## Classes
- `AnimalActivity`

## Function Details

### `__construct`


### `getId`


### `getType`


### `setType`

- **Parameters**: `AnimalType $type`

### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalActivityTranslation
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

