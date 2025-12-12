# OrderFixture.php

**Path**: `src\Fixture\OrderFixture.php`

## Summary
The `OrderFixture` class is a data fixture for generating and persisting test order data in a Sylius e-commerce application. It creates a specified number of order entities using an example factory, assigns completion dates (either provided or randomly generated), and persists them in batches of 50 to the database through Doctrine's ObjectManager. This fixture is used to populate the database with sample orders for development, testing, or demonstration purposes.

## Classes
- `OrderFixture`

## Function Details

### `load`

- **Parameters**: `array $options`
- **Description**: @throws \Exception
/

### `getName`


### `configureOptionsNode`

- **Parameters**: `ArrayNodeDefinition $optionsNode`

### `generateDates`

- **Parameters**: `int $amount`

