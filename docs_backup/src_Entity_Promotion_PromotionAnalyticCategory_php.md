# PromotionAnalyticCategory.php

**Path**: `src\Entity\Promotion\PromotionAnalyticCategory.php`

## Summary
This is a Doctrine entity class that represents promotional analytic categories for tracking and organizing promotions in a Sylius-based e-commerce system. The entity stores categorization metadata including a main category, name, active status, display position, and an optional talon suffix for coupon code generation. It's exposed via GraphQL API (with query and collection endpoints) to enable retrieval of promotion analytics data for reporting and analysis purposes.

## Classes
- `PromotionAnalyticCategory`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `getMainCategory`


### `setMainCategory`

- **Parameters**: `string $mainCategory`

### `isActive`


### `setActive`

- **Parameters**: `bool $active`

### `getPosition`


### `setPosition`

- **Parameters**: `int $position`

### `getTalonSuffix`


### `setTalonSuffix`

- **Parameters**: `?string $talonSuffix`

### `__toString`


