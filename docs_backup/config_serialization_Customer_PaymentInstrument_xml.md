# PaymentInstrument.xml

**Path**: `config\serialization\Customer\PaymentInstrument.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PaymentInstrument` entity, controlling which attributes (id, code, method, state, expiration, details) are exposed in different API contexts. It establishes role-based access control by specifying separate serialization groups for admin operations (reading/updating instruments and subscriptions) and shop/customer-facing operations, ensuring appropriate data visibility based on user permissions and use cases.

