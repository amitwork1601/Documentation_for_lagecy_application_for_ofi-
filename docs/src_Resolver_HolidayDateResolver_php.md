# HolidayDateResolver.php

**Path**: `src\Resolver\HolidayDateResolver.php`

## Summary
The `HolidayDateResolver` class is responsible for calculating and resolving holiday dates for a given year, including both fixed holidays (with specific month/day) and variable holidays (calculated relative to Easter). It provides functionality to retrieve all holiday dates as DateTime objects and determine if a given date falls before a holiday, supporting business logic that needs to account for holidays in scheduling or date-related operations.

## Classes
- `HolidayDateResolver`

## Function Details

### `__construct`

- **Parameters**: `private HolidayDateRepository $holidayDateRepository`

### `getAllDatetime`

- **Parameters**: `int $year`

### `getAllFixedDatetime`

- **Parameters**: `int $year`

### `getAllVariableDatetime`

- **Parameters**: `int $year`

### `isBeforeHolidayDatetime`

- **Parameters**: `?\DateTime $date = null, int $days_before_holiday = 1`

### `isDayBeforeHolidayDatetime`

- **Parameters**: `\DateTime $date`

### `isDayAfterHolidayDatetime`

- **Parameters**: `\DateTime $date`

### `isHolidayDatetime`

- **Parameters**: `?\DateTime $date = null`
- **Description**: Vérifie si la date est un jour férié ou un week-end.
/

### `isWeekendDate`

- **Parameters**: `\DateTime $date`
- **Description**: Vérifie si la date est un week-end.
/

### `setNextOpenedDay`

- **Parameters**: `\DateTime $date`

### `setPrevOpenedDay`

- **Parameters**: `\DateTime $date`

