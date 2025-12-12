# ShippingStepFunnel.vue

**Path**: `apps\front-ecommerce\components\checkout\ShippingStepFunnel.vue`

## Summary
This Vue component manages the shipping step of a checkout funnel in an e-commerce application. It wraps a `ShippingConfigurator` component that handles shipping type selection, address management, shipping method selection, and pickup point configuration, only displaying when the checkout step is set to "SHIPPING". The component uses two-way data binding to synchronize checkout state with its parent and includes a mobile-specific order summary display.

