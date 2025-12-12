# AnimalGenericFilter.php

**Path**: `src\Api\Filters\AnimalGenericFilter.php`

## Summary
The `AnimalGenericFilter` class implements a generic search filter for Animal entities that allows searching across multiple fields using a single search term. It performs a comprehensive search by matching the input value against the animal's name, the associated customer's full name and email (concatenated), and both the animal's and customer's IDs, enabling users to find animals through various related attributes in a single query.

## Classes
- `AnimalGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

