# PaymentPublicConfig.xml

**Path**: `config\serialization\Payment\PaymentPublicConfig.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PaymentPublicConfig` API view class. It controls when the `payment` and `config` attributes should be included in API responses, specifically exposing them across four contexts: admin instrument management, admin order viewing, shop cart display, and shop instrument viewing. The configuration ensures payment configuration data is properly serialized for both administrative and customer-facing contexts while maintaining appropriate access control boundaries.

