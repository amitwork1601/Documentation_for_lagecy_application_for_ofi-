# AddingEligibleProductVariantToSubscriptionOrder.php

**Path**: `src\Validator\SubscriptionOrder\AddingEligibleProductVariantToSubscriptionOrder.php`

## Summary
This validator ensures that only eligible product variants can be added to subscription orders in the system. It extends `AbstractProductVariantConstraints` to inherit validation rules specific to product variants, applying those constraints in the context of subscription-based purchases. The class serves as a custom Symfony validation constraint to enforce business rules around which products are allowed in recurring subscription orders versus one-time purchases.

## Classes
- `AddingEligibleProductVariantToSubscriptionOrder`

