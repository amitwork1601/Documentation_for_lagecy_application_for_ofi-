# UTCDateTimeType.php

**Path**: `src\Doctrine\Types\UTCDateTimeType.php`

## Summary
This is a custom Doctrine DBAL type that ensures all DateTime values are stored in the database as UTC timestamps, regardless of the application's timezone. When converting to the database, it forces DateTime objects to UTC timezone; when reading from the database, it converts UTC timestamps back to the application's default timezone, providing consistent timezone handling across the application's data layer.

## Classes
- `UTCDateTimeType`

## Function Details

### `convertToDatabaseValue`

- **Parameters**: `$value, AbstractPlatform $platform`

### `convertToPHPValue`

- **Parameters**: `$value, AbstractPlatform $platform`

### `getUtc`


