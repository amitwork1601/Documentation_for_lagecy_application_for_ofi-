# routing.yaml

**Path**: `plugins\PayzenPlugin\src\Resources\config\routing.yaml`

## Summary
This routing configuration file defines a single endpoint for handling Instant Payment Notification (IPN) callbacks from the Payzen payment gateway. The route accepts both GET and POST requests to `/payzen-ipn/{orderId}` and directs them to the IpnController, which processes payment status updates for Sylius e-commerce orders integrated with the Payzen payment system.

