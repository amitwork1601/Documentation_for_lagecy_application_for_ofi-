# gateway.yaml

**Path**: `config\services\gateway.yaml`

## Summary
This Symfony service configuration file registers multiple payment and shipping gateway integrations for an e-commerce application. It defines services for five payment gateways (Checkout.com, Payzen, PayPal, Manual Payment, and Upcoming Payment) and three shipping gateways (Mondial Relay, GLS by Mondial Relay, and Colissimo Pickup), each tagged for registration in a gateway registry system that categorizes them by type (payment_method or shipping_method).

