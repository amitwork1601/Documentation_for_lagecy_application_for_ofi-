# PromotionAnalyticTarget.php

**Path**: `src\Entity\Promotion\PromotionAnalyticTarget.php`

## Summary
This entity class represents an analytics target for promotions in a Sylius e-commerce system, used to track and categorize promotional campaign goals or audience segments. It stores categorization data (main category, name), positioning information, and active status flags for promotion tracking purposes. The entity is exposed through GraphQL API operations (query and collection) for read-only access to promotion analytics configuration data.

## Classes
- `PromotionAnalyticTarget`

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

