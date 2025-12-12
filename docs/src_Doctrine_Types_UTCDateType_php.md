# UTCDateType.php

**Path**: `src\Doctrine\Types\UTCDateType.php`

## Summary
This Doctrine DBAL custom type extends `DateTimeType` to handle date-only values (without time components) by ensuring proper timezone handling during database conversion. It stores dates in the database without timezone conversion to prevent day-shifting, but when converting from database to PHP, it parses dates as UTC, sets the time to midnight, and then converts to the application's default timezone to maintain date accuracy across different timezones.

## Classes
- `UTCDateType`

## Function Details

### `convertToDatabaseValue`

- **Parameters**: `$value, AbstractPlatform $platform`

### `convertToPHPValue`

- **Parameters**: `$value, AbstractPlatform $platform`

### `getUtc`


