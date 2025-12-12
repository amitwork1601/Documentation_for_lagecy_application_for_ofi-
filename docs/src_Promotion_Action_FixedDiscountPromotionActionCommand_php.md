# FixedDiscountPromotionActionCommand.php

**Path**: `src\Promotion\Action\FixedDiscountPromotionActionCommand.php`

## Summary
This class is a Symfony decorator for Sylius's fixed discount promotion action that applies a fixed monetary discount to orders. It extends the base discount command to validate configuration (ensuring an amount is set), execute the discount by proportionally distributing it across order units, and integrates with a custom repository to track promotion coupon usage per customer. The class serves as a customization layer for Sylius's e-commerce promotion system, specifically handling order-level fixed amount discounts with channel-specific configurations.

## Classes
- `FixedDiscountPromotionActionCommand`

## Function Details

### `isConfigurationValid`

- **Parameters**: `array $configuration`

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `calculateAdjustmentAmount`

- **Parameters**: `int $promotionSubjectTotal, int $targetPromotionAmount`

