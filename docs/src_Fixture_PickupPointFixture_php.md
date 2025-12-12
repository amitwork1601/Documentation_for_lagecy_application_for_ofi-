# PickupPointFixture.php

**Path**: `src\Fixture\PickupPointFixture.php`

## Summary
This fixture class is responsible for loading test/seed data for pickup points (collection locations for shipped orders) into the database. It takes configuration data defining pickup point details (coordinates, addresses, opening hours, etc.), converts them into PickupPointDto objects with geographic Point locations, and imports them using the PickupPointImporter service, primarily for GLS shipping integration testing and development environments.

## Classes
- `PickupPointFixture`

## Function Details

### `load`

- **Parameters**: `array $options`

### `getName`


### `configureOptionsNode`

- **Parameters**: `ArrayNodeDefinition $optionsNode`

### `getShippingMethod`

- **Parameters**: `$code`

