# Version20250521120056.php

**Path**: `migrations\Version20250521120056.php`

## Summary
This Doctrine database migration updates the `sylius_customer_business_report` table to replace NULL values in the `historic_used_coupons` column with empty JSON arrays ("[]"), ensuring consistent data representation for coupon tracking. The migration provides a reversible operation (down method) that converts empty arrays back to NULL values if needed, maintaining data integrity for customer business reporting functionality.

## Classes
- `Version20250521120056`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

