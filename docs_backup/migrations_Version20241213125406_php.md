# Version20241213125406.php

**Path**: `migrations\Version20241213125406.php`

## Summary
This is a Doctrine database migration that modifies multiple Sylius e-commerce tables to allow NULL values for specific columns. The migration primarily changes the `name` field in various animal-related translation tables (breed, type, gender, activity, etc.) and adjusts nullable constraints on promotion coupon and subscription tables, making the database schema more flexible by permitting null defaults where previously they were required.

## Classes
- `Version20241213125406`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

