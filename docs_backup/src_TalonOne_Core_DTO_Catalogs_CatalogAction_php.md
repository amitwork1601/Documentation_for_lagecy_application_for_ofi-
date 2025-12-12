# CatalogAction.php

**Path**: `src\TalonOne\Core\DTO\Catalogs\CatalogAction.php`

## Summary
The `CatalogAction` class is a Data Transfer Object (DTO) that represents a catalog synchronization action for the TalonOne integration, specifically handling product variant updates to external catalog systems. It encapsulates the action type and payload, currently supporting only the 'ADD' operation which creates an `AddItemCatalogAction` for adding product variants to a catalog within a specific channel context. The class uses a match expression to handle different sync types and throws an exception for unsupported operations.

## Classes
- `CatalogAction`

