# ProductFixture.php

**Path**: `src\Fixture\ProductFixture.php`

## Summary
This class extends Sylius's base ProductFixture to add custom configuration options for product fixtures in the application. It specifically adds two additional fields to the product fixture configuration: a `subscribable` flag (to indicate if a product can be subscribed to) and a `price` field (as an integer), enabling these custom properties to be loaded when seeding product data for testing or demo purposes.

## Classes
- `ProductFixture`

## Function Details

### `configureResourceNode`

- **Parameters**: `ArrayNodeDefinition $resourceNode`

