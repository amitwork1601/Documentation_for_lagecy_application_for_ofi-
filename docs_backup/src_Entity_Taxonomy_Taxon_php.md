# Taxon.php

**Path**: `src\Entity\Taxonomy\Taxon.php`

## Summary
The `Taxon` class extends Sylius's base taxonomy model to represent hierarchical category structures (e.g., product categories) within the e-commerce system. It configures API Platform to expose taxons through GraphQL queries only (no mutations), with filtering capabilities by code, translated names, enabled status, and custom taxon-specific filters. The class uses custom `TaxonTranslation` objects to support multi-language taxonomy names and descriptions.

## Classes
- `Taxon`

## Function Details

### `createTranslation`


