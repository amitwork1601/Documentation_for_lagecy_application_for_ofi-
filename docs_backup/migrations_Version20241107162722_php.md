# Version20241107162722.php

**Path**: `migrations\Version20241107162722.php`

## Summary
This Doctrine database migration creates a new table `sylius_order_talon_one_coupon` to track the history of Talon.One promotional coupons applied to Sylius e-commerce orders. The table stores coupon details including code, name, discount amount, and effect trigger identifier, with a foreign key relationship to the orders table, enabling the system to maintain an audit trail of which third-party (Talon.One) coupons were used on each order.

## Classes
- `Version20241107162722`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

