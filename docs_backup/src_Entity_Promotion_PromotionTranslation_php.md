# PromotionTranslation.php

**Path**: `src\Entity\Promotion\PromotionTranslation.php`

## Summary
This entity class extends Sylius's base `PromotionTranslation` to store translated/localized content for promotions (such as names and descriptions in different languages). It configures the entity as an API Platform GraphQL resource with read-only query capabilities (Query and QueryCollection operations) while disabling standard REST operations, allowing promotions to be displayed in multiple languages via GraphQL API.

## Classes
- `PromotionTranslation`

