# PromotionFixture.php

**Path**: `src\Fixture\PromotionFixture.php`

## Summary
This class extends Sylius's base PromotionFixture to add support for categorizing promotions during fixture loading. It enhances the configuration schema by adding a required "category" field to promotion fixture definitions, allowing promotions to be organized or filtered by category when loading test/sample data into the application.

## Classes
- `PromotionFixture`

## Function Details

### `configureResourceNode`

- **Parameters**: `ArrayNodeDefinition $resourceNode`

