# HolidayDateRepository.php

**Path**: `src\Repository\HolidayDateRepository.php`

## Summary
The `HolidayDateRepository` class extends Sylius's entity repository to manage holiday date entities in a French business context. It provides two query methods to distinguish between fixed holidays (dates that occur on the same calendar day each year, like Christmas) and variable holidays (dates that change yearly based on calculations, like Easter), enabling the application to handle different types of public holidays separately.

## Classes
- `HolidayDateRepository`

## Function Details

### `findFixedHolidays`

- **Description**: Liste les jours fériés fixes.
/

### `findVariableHolidays`

- **Description**: Liste les jours fériés variables.
/

