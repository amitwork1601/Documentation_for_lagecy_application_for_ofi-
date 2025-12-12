# Version20241020131407.php

**Path**: `migrations\Version20241020131407.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that creates a new `sylius_payment_request` table to track individual payment processing requests. The table stores payment request details including hash identifier, state, action, payload data, response data, and timestamps, with foreign key relationships to payment methods and payments tables, enabling the system to maintain a detailed audit trail of payment transaction attempts and their outcomes.

## Classes
- `Version20241020131407`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

