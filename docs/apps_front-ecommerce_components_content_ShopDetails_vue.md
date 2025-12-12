# ShopDetails.vue

**Path**: `apps\front-ecommerce\components\content\ShopDetails.vue`

## Summary
This Vue component displays detailed information about a physical shop location in an e-commerce application. It integrates Google Maps to show the shop's geographic location, formats and displays opening hours (both regular weekly schedules and special hours), and provides shop contact details and metadata. The component handles date/time comparisons to determine if special hours are currently applicable and uses ImageKit for optimizing map pin icons.

## Function Details

### `isActual`

- **Parameters**: `dateToCompare: Date`

### `markerInfoContentBuilder`

- **Parameters**: `marker: IShop`

### `places`

- **Parameters**: `computed((`

### `formattedOpenings`

- **Parameters**: `computed((`

### `getHours`

- **Parameters**: `openingDays?: IOpeningHourSpecification`

### `specialHoursMessage`

- **Parameters**: `computed((`

