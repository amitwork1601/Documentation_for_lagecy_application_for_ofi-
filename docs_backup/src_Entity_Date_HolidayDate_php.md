# HolidayDate.php

**Path**: `src\Entity\Date\HolidayDate.php`

## Summary
This Doctrine ORM entity represents a holiday date in a Sylius-based e-commerce system, storing information about holidays that can be either fixed (specific day/month) or variable (calculated dates like Easter). The entity tracks the holiday's name, day, month, and a variable flag to distinguish between static annual holidays and those with changing dates, likely used for scheduling business operations like shipping, order processing, or store closures around holidays.

## Classes
- `HolidayDate`

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `?string $name`

### `getDay`


### `setDay`

- **Parameters**: `int $day`

### `getMonth`


### `setMonth`

- **Parameters**: `int $month`

### `getVariable`


### `setVariable`

- **Parameters**: `int $variable`

