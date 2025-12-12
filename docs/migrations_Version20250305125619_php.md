# Version20250305125619.php

**Path**: `migrations\Version20250305125619.php`

## Summary
This is a Doctrine database migration that adds a `campaignId` column to the `sylius_order_talon_one_coupon` table to track which Talon.One promotion campaign a coupon belongs to. The migration supports both upgrading (adding the column) and rolling back (removing the column) the database schema change for the Sylius e-commerce platform's Talon.One coupon integration.

## Classes
- `Version20250305125619`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

