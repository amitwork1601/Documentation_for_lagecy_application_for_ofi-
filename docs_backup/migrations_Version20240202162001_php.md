# Version20240202162001.php

**Path**: `migrations\Version20240202162001.php`

## Summary
This is a Doctrine database migration that removes the old Mondial Relay (a European parcel delivery service) integration from a Sylius e-commerce system. The migration drops the foreign key relationship between addresses and Mondial Relay pickup points, removes the `mondial_relay_id` column from the `sylius_address` table, and renames the `sylius_mondial_relay` table to `old_sylius_mondial_relay` for archival purposes, with the `down()` method providing rollback capability to restore the previous structure.

## Classes
- `Version20240202162001`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

