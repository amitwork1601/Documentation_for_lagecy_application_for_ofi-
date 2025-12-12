# PickupPointBuilder.php

**Path**: `src\Gateway\Api\Colissimo\Builder\PickupPointBuilder.php`

## Summary
This class builds structured pickup point data for Colissimo shipping services by parsing semicolon-delimited strings into arrays. It handles country-specific data formats for France (FR) and Belgium (BE), extracting information about pickup point locations (PR), opening hours (HO), and closing periods (FE) while filtering out entries with ignored prefixes. The builder serves as a data transformation layer between Colissimo's API response format and the application's internal pickup point representation.

## Classes
- `PickupPointBuilder`

## Function Details

### `build`

- **Parameters**: `string $data, string $countryCode`

### `PRFrance`

- **Parameters**: `string $data, string $countryCode`

### `PRBelgium`

- **Parameters**: `string $data, string $countryCode`

### `buildClosingPeriods`

- **Parameters**: `int $pickupId, string $startDate, string $endDate`

### `convertToYmd`

- **Parameters**: `string $date`

