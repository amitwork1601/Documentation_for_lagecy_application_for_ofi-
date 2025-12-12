# ShippingConfigurator.vue

**Path**: `apps\front-ecommerce\components\checkout\ShippingConfigurator.vue`

## Summary
This Vue component manages the shipping configuration process during checkout in an e-commerce application. It handles both home delivery and pickup point shipping options, allowing users to select shipping addresses from their address book, choose shipping methods/transporters, and select pickup point locations with Google Maps integration. The component coordinates between shipping address management, shipping method selection, and pickup point selection while synchronizing these choices through v-model bindings for parent component communication.

## Function Details

### `markerInfoContentBuilder`

- **Parameters**: `marker: IPickupPoint`

### `normalizeCarrierCode`

- **Parameters**: `code: string`

### `getPickupPointIcon`

- **Parameters**: `point: IPickupPoint`

### `activePickupShippingType`


### `getMinPrice`

- **Parameters**: `marker: IMarker`

