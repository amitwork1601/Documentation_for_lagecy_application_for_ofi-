# UnitPercentageDiscountPromotionActionCommand.php

**Path**: `src\Promotion\Action\UnitPercentageDiscountPromotionActionCommand.php`

## Summary
This class implements a unit-level percentage discount promotion action for an e-commerce system built on Sylius. It extends Sylius's base discount command to apply percentage-based discounts to individual order items while supporting complex filtering rules (by product, variant, taxon, price range, subscription status, and their exclusions). The class serves as a specialized promotion engine component that calculates and applies percentage discounts to eligible items in an order based on configurable promotion criteria.

## Classes
- `UnitPercentageDiscountPromotionActionCommand`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

