# SyncCatalog.php

**Path**: `src\TalonOne\Domain\UseCase\SyncCatalog.php`

## Summary
This class implements a use case for synchronizing product catalog data with the TalonOne promotion/loyalty platform. It takes an array of ProductVariant entities, builds a synchronization request using the builder pattern, sends it to TalonOne's integration API, and handles any errors by converting technical exceptions into domain-specific API exceptions.

## Classes
- `SyncCatalog`

## Function Details

### `execute`

- **Parameters**: `array $productVariants`
- **Description**: @param ProductVariant[] $productVariants

@return true

@throws TalonOneApiException
/

