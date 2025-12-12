# ReplaceRequestHandler.php

**Path**: `src\Api\CommandHandler\ProductVariant\ReplaceRequestHandler.php`

## Summary
This command handler replaces all occurrences of a source product variant with a target product variant across the system's order and subscription items. It validates that both source and target variants exist, then updates all order items and subscription items that reference the source variant to point to the target variant instead, likely used for product catalog management scenarios like discontinuing products or merging duplicate variants.

## Classes
- `ReplaceRequestHandler`

## Function Details

### `__invoke`

- **Parameters**: `ReplaceRequest $command`

