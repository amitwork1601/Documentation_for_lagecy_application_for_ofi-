# trackingEventOnBeginCheckout.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnBeginCheckout.ts`

## Summary
This class implements a tracking event for the "begin checkout" action in an e-commerce application, specifically designed to send checkout initiation data to Google Tag Manager (GTM). It transforms Sylius product data (cart items with details like variant codes, prices, quantities, and subscription information) into a standardized GTM ecommerce event format with enriched metadata like item lists, brands, and pricing, enabling analytics tracking when users start the checkout process.

## Classes
- `TrackingEventOnBeginCheckout`

## Function Details

### `itemsListGTM`

- **Parameters**: `computed((`

