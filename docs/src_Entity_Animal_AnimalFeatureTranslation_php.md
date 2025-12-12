# AnimalFeatureTranslation.php

**Path**: `src\Entity\Animal\AnimalFeatureTranslation.php`

## Summary
This entity class manages translations for animal feature names in different locales within a Sylius-based e-commerce system. It extends Sylius's AbstractTranslation to provide internationalization support, storing locale-specific names for animal features in a dedicated database table with a unique constraint ensuring one translation per locale per feature. The class is exposed via GraphQL API for querying translated animal feature data.

## Classes
- `AnimalFeatureTranslation`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

