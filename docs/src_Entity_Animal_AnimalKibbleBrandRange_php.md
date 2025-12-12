# AnimalKibbleBrandRange.php

**Path**: `src\Entity\Animal\AnimalKibbleBrandRange.php`

## Summary
This entity represents a product range or line of animal kibble brands in an e-commerce system built on Sylius. It serves as a parent categorization for grouping related `AnimalKibbleBrand` entities, allowing kibble products to be organized into distinct ranges (e.g., "Premium Line", "Puppy Range", etc.). The entity provides GraphQL query endpoints via API Platform and includes standard timestamps, unique code identification, and a one-to-many relationship with individual kibble brands.

## Classes
- `AnimalKibbleBrandRange`

## Function Details

### `__construct`


### `getId`


### `getBrands`


### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getName`


### `setName`

- **Parameters**: `string $name`

### `__toString`


