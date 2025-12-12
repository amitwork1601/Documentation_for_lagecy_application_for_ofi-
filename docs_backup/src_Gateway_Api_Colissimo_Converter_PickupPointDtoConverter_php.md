# PickupPointDtoConverter.php

**Path**: `src\Gateway\Api\Colissimo\Converter\PickupPointDtoConverter.php`

## Summary
This converter class transforms Colissimo API pickup point data into the application's internal `PickupPointDto` format. It maps external pickup point attributes (address, coordinates, weight limits, opening hours) while sanitizing special characters, converting weight units from kg to grams, creating geographical Point objects for location data, and filtering opening hours based on current period validity. The class serves as an adapter layer between the Colissimo shipping service API and the application's domain model for managing pickup point locations.

## Classes
- `PickupPointDtoConverter`

## Function Details

### `convert`

- **Parameters**: `array $pickupPoints`

### `convertOpeningDays`

- **Parameters**: `array $data`

### `convertDayOfWeek`

- **Parameters**: `string $date`

### `formatOpeningHours`

- **Parameters**: `string $openingHours`

### `isInPeriod`

- **Parameters**: `?string $startPeriod, ?string $endPeriod`

### `removeSpecialCharacters`

- **Parameters**: `string $text`

