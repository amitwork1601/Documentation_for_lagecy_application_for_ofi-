# webhook.yml

**Path**: `plugins\PayPalPlugin\src\Resources\config\webhook.yml`

## Summary
This configuration file defines PayPal webhook endpoints for the Sylius PayPal Plugin, mapping specific PayPal payment events to corresponding Symfony routes. It handles three critical payment lifecycle events: order approval during checkout, successful payment capture completion, and denied/failed payment captures, enabling the application to respond appropriately to PayPal transaction status changes in real-time.

