# Version20241024174728.php

**Path**: `migrations\Version20241024174728.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that adds a `use_payum` boolean column to the `sylius_gateway_config` table to differentiate between the new PaymentRequest gateway system and the legacy Payum payment gateway implementation. The migration defaults the flag to `1` (true) for existing records to maintain backward compatibility with existing Payum-based payment configurations.

## Classes
- `Version20241024174728`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

