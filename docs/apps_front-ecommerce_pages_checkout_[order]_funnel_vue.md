# funnel.vue

**Path**: `apps\front-ecommerce\pages\checkout\[order]\funnel.vue`

## Summary
This Vue component implements a checkout funnel page for an e-commerce application that handles multi-step order processing (delivery, carrier, payment options). It manages cross-tab synchronization using broadcast channels to ensure only one active checkout session exists, tracks various checkout events (delivery views, shipping type selections, payment options), and enforces authentication while loading checkout data and CMS-driven page content for the funnel experience.

## Function Details

### `closeDialogNotMainTab`


