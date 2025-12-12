# Product.php

**Path**: `src\Entity\Product\Product.php`

## Summary
This is a Symfony/Sylius e-commerce Product entity that extends the base Sylius product model and exposes it through API Platform with GraphQL support. The class adds custom functionality including an `oldProduct` boolean flag for product lifecycle management, custom API filters for searching/sorting products by various criteria (taxons, stock, logistics codes, enabled status), and uses a custom collection provider for optimized queries. It serves as the core product model in a Sylius-based e-commerce application with API-first architecture.

## Classes
- `Product`

## Function Details

### `createTranslation`


### `getClassification`

- **Parameters**: `bool $rawValue = true, ?string $locale = null`

### `getClassificationValue`


### `getSubClassification`

- **Parameters**: `$rawValue = false`

### `isSample`


### `isOldProduct`


### `setOldProduct`

- **Parameters**: `bool $oldProduct`

### `getName`


### `diffProductTaxons`

- **Parameters**: `array $taxons`

### `diffChannels`

- **Parameters**: `array $channels`

### `diffTranslations`

- **Parameters**: `array $translations`

### `diffAttributes`

- **Parameters**: `array $attributes`

