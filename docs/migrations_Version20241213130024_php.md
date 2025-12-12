# Version20241213130024.php

**Path**: `migrations\Version20241213130024.php`

## Summary
This Doctrine migration converts the `configuration` column from serialized PHP array format to JSON format in two Sylius e-commerce tables: `sylius_order_rule_condition` and `sylius_payment_method_charges`. The migration unserializes existing PHP serialized data, re-encodes it as JSON, updates the database records, and then alters the column type to JSON, modernizing the data storage approach for better interoperability and performance.

## Classes
- `Version20241213130024`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

