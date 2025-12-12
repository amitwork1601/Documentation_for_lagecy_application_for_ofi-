# ShippingMethodFixture.php

**Path**: `src\Fixture\ShippingMethodFixture.php`

## Summary
This class extends Sylius's base ShippingMethodFixture to customize the shipping method fixture configuration for the application. It adds four additional configuration fields (exposed status, category requirement, gateway config, and shipping method category) with default values to support enhanced shipping method fixtures during data loading or testing scenarios.

## Classes
- `ShippingMethodFixture`

## Function Details

### `configureResourceNode`

- **Parameters**: `ArrayNodeDefinition $resourceNode`

