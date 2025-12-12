# SyncCartItemCatalogRequest.php

**Path**: `src\TalonOne\Core\DTO\Catalogs\SyncCartItemCatalogRequest.php`

## Summary
This is a Data Transfer Object (DTO) for synchronizing cart item catalog data with the Talon.One promotion engine integration. It encapsulates a collection of catalog actions that need to be performed, providing methods to set multiple actions at once or add them individually, with support for Symfony serialization groups for API communication.

## Classes
- `SyncCartItemCatalogRequest`

## Function Details

### `setActions`

- **Parameters**: `array $actions`
- **Description**: @var CatalogAction[] */
#[Groups(['talon.one.integration'])]
public array $actions;

/**
@param CatalogAction[] $actions
/

### `addAction`

- **Parameters**: `CatalogAction $action`

