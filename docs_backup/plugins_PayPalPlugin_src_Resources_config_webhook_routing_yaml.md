# webhook_routing.yaml

**Path**: `plugins\PayPalPlugin\src\Resources\config\webhook_routing.yaml`

## Summary
This YAML configuration file defines webhook routing endpoints for the Sylius PayPal plugin to handle PayPal payment event callbacks. It maps three PayPal webhook events (checkout order approval, payment capture completion, and payment capture denial) to their respective controller actions that update order and payment state machines accordingly. The file serves as the integration layer between PayPal's webhook notifications and Sylius's order/payment processing workflow.

