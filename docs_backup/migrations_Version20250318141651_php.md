# Version20250318141651.php

**Path**: `migrations\Version20250318141651.php`

## Summary
This is a Doctrine database migration that adds coupon tracking functionality to customer business reports. It adds a new `historic_used_coupons` JSON column to the `sylius_customer_business_report` table to store historical coupon usage data, with a corresponding rollback operation that removes the column if needed.

## Classes
- `Version20250318141651`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

