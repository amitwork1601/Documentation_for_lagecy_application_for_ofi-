# TaxonGenericFilter.php

**Path**: `src\Api\Filters\TaxonGenericFilter.php`

## Summary
This class implements a custom API Platform filter for the Taxon entity that enables generic text search across multiple fields. It performs a case-insensitive LIKE search by concatenating the taxon's code with its translated name, allowing users to filter taxonomy records by searching across both properties simultaneously using a single "genericFilter" query parameter.

## Classes
- `TaxonGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

