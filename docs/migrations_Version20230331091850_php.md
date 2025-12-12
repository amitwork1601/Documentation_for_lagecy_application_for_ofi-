# Version20230331091850.php

**Path**: `migrations\Version20230331091850.php`

## Summary
This Doctrine migration initializes Sylius's price history tracking feature by creating three database tables: one for channel price history configuration (including lowest price display settings and checking periods), one for excluded taxons from price tracking, and one for logging channel pricing changes over time. The migration enables the e-commerce platform to track historical product prices for compliance with regulations requiring disclosure of lowest prices before discounts (e.g., EU Omnibus Directive).

## Classes
- `Version20230331091850`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `postUp`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

