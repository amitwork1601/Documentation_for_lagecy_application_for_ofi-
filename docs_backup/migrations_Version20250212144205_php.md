# Version20250212144205.php

**Path**: `migrations\Version20250212144205.php`

## Summary
This is a Doctrine database migration that modifies the `sylius_email_audit` table by removing the `template_id` column. The migration supports both forward (up) and backward (down) operations, allowing the column to be dropped when upgrading and restored as a nullable integer field when rolling back the database schema changes.

## Classes
- `Version20250212144205`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

