# Version20240325151346.php

**Path**: `migrations\Version20240325151346.php`

## Summary
This database migration refactors the subscription alert architecture by removing the separate `sylius_subscription_alert` table (which had a foreign key relationship to subscriptions) and consolidating alert data into a single `subscription_alert` LONGTEXT field directly on the `sylius_subscription` table. This change simplifies the data model by denormalizing subscription alerts, likely moving from a one-to-many relationship to storing alert information as serialized data within each subscription record.

## Classes
- `Version20240325151346`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

