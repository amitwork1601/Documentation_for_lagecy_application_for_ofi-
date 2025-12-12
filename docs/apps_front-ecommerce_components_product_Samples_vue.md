# Samples.vue

**Path**: `apps\front-ecommerce\components\product\Samples.vue`

## Summary
This Vue component manages the display and functionality for adding product samples to a shopping cart in an e-commerce application. It handles the cart addition process by calling the cart store's API, tracks the add-to-cart events with GTM (Google Tag Manager) analytics, and emits events to parent components when samples are successfully added. The component receives product data, available samples, and optional tracking source information as props, then coordinates between the UI, cart state management, and analytics tracking systems.

## Function Details

### `item`

- **Parameters**: `order.items.find((item`

