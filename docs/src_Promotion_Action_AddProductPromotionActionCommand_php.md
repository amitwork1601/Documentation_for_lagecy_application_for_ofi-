# AddProductPromotionActionCommand.php

**Path**: `src\Promotion\Action\AddProductPromotionActionCommand.php`

## Summary
This class implements a promotion action that adds a free or discounted product to an order as part of a promotional campaign. It extends Sylius's unit discount functionality to automatically add specified product variants to the cart when promotion conditions are met, handling order item creation, quantity modification, and adjustment tracking for "buy X get Y" or gift-with-purchase type promotions.

## Classes
- `AddProductPromotionActionCommand`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

