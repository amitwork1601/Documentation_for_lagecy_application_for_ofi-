# AnimalFeed.php

**Path**: `src\Entity\Animal\AnimalFeed.php`

## Summary
The `AnimalFeed` entity represents different types of animal feed in a Sylius-based e-commerce or resource management system. It implements translatable functionality to support multi-language feed names/descriptions, includes timestampable behavior for tracking creation/modification dates, and exposes GraphQL query operations through API Platform for retrieving feed data with pagination support.

## Classes
- `AnimalFeed`

## Function Details

### `__construct`


### `getId`


### `getTranslation`

- **Parameters**: `?string $locale = null`
- **Description**: @return AnimalFeedTranslation
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

