# PaymentChargesPercentageDiscountActionCommand.php

**Path**: `src\Promotion\Action\PaymentChargesPercentageDiscountActionCommand.php`

## Summary
This class implements a promotion action that applies a percentage-based discount specifically to payment charges in an e-commerce order system. It calculates the discount amount based on existing payment charge adjustments for a specific channel, validates that discounts don't exceed the original payment charges, and creates negative adjustment entries to reduce the payment-related costs as part of Sylius framework's promotion system.

## Classes
- `PaymentChargesPercentageDiscountActionCommand`

## Function Details

### `__construct`

- **Parameters**: `FactoryInterface $adjustmentFactory`

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `createAdjustment`

- **Parameters**: `PromotionInterface $promotion, string $type = AdjustmentInterface::PAYMENT_CHARGES_PROMOTION_ADJUSTMENT`

