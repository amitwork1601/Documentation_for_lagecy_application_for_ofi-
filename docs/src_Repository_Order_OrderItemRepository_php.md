# OrderItemRepository.php

**Path**: `src\Repository\Order\OrderItemRepository.php`

## Summary
The `OrderItemRepository` class extends Sylius's base order item repository to provide product variant replacement functionality in shopping carts. Its main feature is the `replaceVariant()` method, which performs a bulk update operation to replace all instances of a source product variant with a target variant across all active shopping carts (non-completed orders), typically used when products are updated or consolidated in an e-commerce system.

## Classes
- `OrderItemRepository`

## Function Details

### `replaceVariant`

- **Parameters**: `ProductVariant $sourceVariant, ProductVariant $targetVariant`

