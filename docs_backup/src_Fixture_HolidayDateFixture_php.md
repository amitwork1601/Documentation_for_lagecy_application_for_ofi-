# HolidayDateFixture.php

**Path**: `src\Fixture\HolidayDateFixture.php`

## Summary
This is a Sylius framework fixture class that loads holiday date data into the database for what appears to be a French calendar system. The class creates and persists holiday entities with properties like name, day, month, and a variable flag (likely indicating fixed vs. moveable holidays), including French national holidays such as New Year's Day, Labor Day (May 1st), Victory Day 1945 (May 8th), and Bastille Day (July 14th). It serves as a database seeding mechanism to populate the application with predefined holiday dates during setup or testing.

## Classes
- `HolidayDateFixture`

## Function Details

### `getName`


### `load`

- **Parameters**: `array $options`

### `loadDefaultHolidayDates`


### `configureOptionsNode`

- **Parameters**: `ArrayNodeDefinition $optionsNode`

