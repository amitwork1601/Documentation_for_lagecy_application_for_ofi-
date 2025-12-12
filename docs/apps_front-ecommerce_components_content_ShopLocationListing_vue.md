# ShopLocationListing.vue

**Path**: `apps\front-ecommerce\components\content\ShopLocationListing.vue`

## Summary
This Vue component displays a listing of physical shop locations for an e-commerce application, with both list and map views. It fetches shop data from a Strapi CMS, processes geographic coordinates, and provides functionality for geolocation-based shop discovery, including Google Maps integration with custom markers and info windows for each shop location.

## Function Details

### `markerInfoContentBuilder`

- **Parameters**: `marker: IShop`

### `calculateTimeDiff`

- **Parameters**: `targetTime: Date`

### `navigate`

- **Parameters**: `$event?: Event`

### `shops`

- **Parameters**: `computedAsync<IShop[]>((`

### `formattedTagsOpeningHours`

- **Parameters**: `computed((`

### `specialHour`

- **Parameters**: `marker.specialHoursSpecification?.find((spe`

