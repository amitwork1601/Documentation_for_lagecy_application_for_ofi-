# AddressOrder.xml

**Path**: `config\serialization\Commands\Checkout\AddressOrder.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AddressOrder` command class used in the checkout process. It specifies that the `billingAddress`, `shippingAddress`, and `email` attributes should be included when serializing/deserializing cart address data for both admin and shop contexts, controlling which fields are exposed in API responses based on user roles.

