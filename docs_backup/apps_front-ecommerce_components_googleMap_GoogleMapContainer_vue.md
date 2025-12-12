# GoogleMapContainer.vue

**Path**: `apps\front-ecommerce\components\googleMap\GoogleMapContainer.vue`

## Summary
This Vue component provides a Google Maps integration for displaying interactive store/location markers in an e-commerce application. It initializes a Google Map instance, plots multiple location markers from the `places` prop, and handles marker interactions including displaying info windows and updating the selected location through v-model binding. The component also includes custom navigation handling to prevent default link behavior and use Nuxt's routing system instead.

## Function Details

### `navigate`

- **Parameters**: `$event?: Event`

### `openInfoWindow`

- **Parameters**: `marker?: google.maps.marker.AdvancedMarkerElement`

