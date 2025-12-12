# PromotionForOrderFactory.php

**Path**: `src\Promotion\Factory\PromotionForOrderFactory.php`

## Summary
This factory class creates Promotion entities specifically designed for order-level promotions in what appears to be a Sylius e-commerce application. It extends Sylius's `AbstractExampleFactory` to configure and instantiate promotions with associated actions, analytic tracking (broadcasts, categories, targets), and metadata like name and description. The factory uses Symfony's OptionsResolver to validate and provide default values for promotion configuration, enabling consistent creation of order-specific promotional campaigns with their business analytics capabilities.

## Classes
- `PromotionForOrderFactory`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `create`

- **Parameters**: `array $options = []`

### `addAnalyticBroadcast`

- **Parameters**: `array $analyticBroadcasts, Promotion $promotion`

### `setAnalyticCategory`

- **Parameters**: `?string $categoryIri, Promotion $promotion`

### `setAnalyticTarget`

- **Parameters**: `?string $targetIri, Promotion $promotion`

### `addAction`

- **Parameters**: `array $actions, Promotion $promotion`

