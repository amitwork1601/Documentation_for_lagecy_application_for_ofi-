# Version20240105104513.php

**Path**: `migrations\Version20240105104513.php`

## Summary
This is a Doctrine database migration that removes all foreign key constraints from a set of deprecated Sylius subscription-related tables (prefixed with "old_"). The migration prepares these legacy subscription tables for deletion by dropping their foreign key relationships, which is typically a prerequisite step before the tables themselves can be safely removed from the database schema.

## Classes
- `Version20240105104513`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

