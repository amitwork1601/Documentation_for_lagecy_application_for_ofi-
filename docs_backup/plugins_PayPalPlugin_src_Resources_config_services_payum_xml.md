# payum.xml

**Path**: `plugins\PayPalPlugin\src\Resources\config\services\payum.xml`

## Summary
This XML configuration file defines Symfony dependency injection services for integrating PayPal payment processing into a Sylius e-commerce application using the Payum payment abstraction library. It registers a PayPal gateway factory and various payment action services (authorize, capture, complete order) that handle different stages of the PayPal payment workflow, each tagged with Payum-specific metadata to wire them into the payment processing pipeline.

