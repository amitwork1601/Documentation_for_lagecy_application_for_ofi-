# AnimalKibbleBrand.php

**Path**: `src\Entity\Animal\AnimalKibbleBrand.php`

## Summary
This entity represents a pet food (kibble) brand in an animal management system, storing brand information such as name, code, premium status, and priority. It's part of a Sylius-based e-commerce implementation that tracks kibble brands and their association with brand ranges, exposed through a GraphQL API for querying brand data. The class implements resource management with validation constraints, timestampable behavior, and enforces unique brand codes across the system.

## Classes
- `AnimalKibbleBrand`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `getRange`


### `setRange`

- **Parameters**: `AnimalKibbleBrandRange $range`

### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getPremium`


### `setPremium`

- **Parameters**: `bool $premium`

### `__toString`


### `getPriority`


### `setPriority`

- **Parameters**: `?int $priority`

