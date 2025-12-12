# OrderInfoShippingAddressDisplay.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\shippingAddress\OrderInfoShippingAddressDisplay.vue`

## Summary
This Vue component displays and manages shipping address information for e-commerce orders and subscriptions, with special handling for Mondial Relay pickup points. It compares order shipping addresses with subscription addresses to detect changes, formats delivery information (including relay point details and opening hours), and provides an editable interface for switching between order and subscription addresses. The component handles both regular home delivery and Mondial Relay point-of-sale delivery methods, with localization support for address formatting and date/time display.

## Function Details

### `relayPointOpeningHours`

- **Parameters**: `openings: Array<Array<string>> | null`

### `switchShippingDisplay`


### `googleMapLink`

- **Parameters**: `latitude: string, longitude: string`

### `openShipupModal`


### `closeModal`


### `formattedAvailableDate`

- **Parameters**: `date: string`

### `isSubscriptionShippingSameAsDraft`

- **Parameters**: `computed((`

### `computedTransporterImage`

- **Parameters**: `computed((`

### `shippingAddress`

- **Parameters**: `computed((`

### `formated`

- **Parameters**: `string: string`

### `format`

- **Parameters**: `string: string`

