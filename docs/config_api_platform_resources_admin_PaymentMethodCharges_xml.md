# PaymentMethodCharges.xml

**Path**: `config\api_platform\resources\admin\PaymentMethodCharges.xml`

## Summary
This API Platform configuration file defines admin-level API endpoints for the `PaymentMethodCharges` entity in a Sylius e-commerce system. It exposes two read-only operations: a collection endpoint to retrieve multiple payment method charges (using the `payment_method:index` serialization group) and a single item endpoint to retrieve individual charge details (using the `payment_method:show` serialization group), both prefixed with `/admin` in the routing.

