# VariantSubscribableFixture.php

**Path**: `src\Fixture\VariantSubscribableFixture.php`

## Summary
This fixture class is responsible for marking all product variants in the system as subscribable during data initialization or seeding. It retrieves all existing ProductVariant entities from the database and sets their `subscribable` property to `true`, which likely enables subscription-based purchasing options for these product variants in an e-commerce context using the Sylius framework.

## Classes
- `VariantSubscribableFixture`

## Function Details

### `__construct`

- **Parameters**: `EntityManagerInterface $em`

### `getName`


### `load`

- **Parameters**: `array $options`

