# CompleteOrder.xml

**Path**: `config\serialization\Commands\Checkout\CompleteOrder.xml`

## Summary
This Symfony serializer configuration file defines how the `CompleteOrder` command object should be serialized/deserialized during the checkout process in a Sylius e-commerce application. It specifies four attributes (ckoSessionId for Checkout.com integration, token, PayerID for PayPal integration, and notes) that are exposed in both admin and shop cart completion API endpoints, enabling payment gateway integration and order finalization with optional customer notes.

