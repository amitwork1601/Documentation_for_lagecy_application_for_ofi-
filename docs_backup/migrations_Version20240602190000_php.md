# Version20240602190000.php

**Path**: `migrations\Version20240602190000.php`

## Summary
This Doctrine database migration adds full-text search indexes to four Sylius e-commerce tables (customer, order, promotion, and product translation) to enable efficient text-based searching across key fields like names, emails, descriptions, and tokens. The migration includes a helper method to generate full-text index ALTER statements with auto-generated index names based on column hashes, improving search performance for these business entities.

## Classes
- `Version20240602190000`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

### `generateFullTextIndexAlter`

- **Parameters**: `string $tablename, array $columns`

### `_generateIdentifierName`

- **Parameters**: `$columnNames, $prefix = '', $maxSize = 30`

