# PromotionProcessor.php

**Path**: `src\Promotion\Processor\PromotionProcessor.php`

## Summary
The `PromotionProcessor` class manages the application of promotions to subjects (likely shopping carts or orders) in an e-commerce system. It first reverts all existing promotions, then retrieves pre-qualified promotions and applies eligible ones sequentially, with support for exclusive promotions that prevent further promotion stacking and a feature flag to enable integration with the Talon.One promotion engine as an alternative processing method.

## Classes
- `PromotionProcessor`

## Function Details

### `process`

- **Parameters**: `PromotionSubjectInterface $subject`

