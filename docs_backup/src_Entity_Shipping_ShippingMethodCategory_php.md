# ShippingMethodCategory.php

**Path**: `src\Entity\Shipping\ShippingMethodCategory.php`

## Summary
The `ShippingMethodCategory` entity represents a categorization system for shipping methods in an e-commerce application built on Sylius framework. It implements a translatable resource that allows shipping methods to be organized into named categories with customizable positioning, enabling multi-language support for category names. The class exposes data through a GraphQL API (read-only with pagination) and includes filtering/sorting capabilities for retrieving shipping method categories.

## Classes
- `ShippingMethodCategory`

## Function Details

### `__construct`


### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `getPosition`


### `setPosition`

- **Parameters**: `?int $position`

### `__toString`


### `getTranslation`

- **Parameters**: `?string $locale = null`

### `getTranslationClass`


### `createTranslation`


