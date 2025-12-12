# PickupPointDtoConverter.php

**Path**: `src\Gateway\Api\GLS\Converter\PickupPointDtoConverter.php`

## Summary
This converter class transforms GLS parcel shop data from their API response format into standardized `PickupPointDto` objects used internally by the application. It extracts and maps location data (coordinates, address), converts opening hours and closing periods, validates required location information, and optionally associates common shipping methods across carriers for unified pickup point representation.

## Classes
- `PickupPointDtoConverter`

## Function Details

### `convert`

- **Parameters**: `\stdClass $parcelShop, array $commonShippingMethods = []`

### `getCommonExternalRef`

- **Parameters**: `PickupPointDto $pickupPointDto`

### `convertOpeningDays`

- **Parameters**: `\stdClass $parcelShop`

### `convertDayOfWeek`

- **Parameters**: `string $date`

### `formatOpeningHours`

- **Parameters**: `\stdClass $workingDay`

### `formatTime`

- **Parameters**: `int $milliseconds`

### `convertClosingPeriods`

- **Parameters**: `?array $holidays`

