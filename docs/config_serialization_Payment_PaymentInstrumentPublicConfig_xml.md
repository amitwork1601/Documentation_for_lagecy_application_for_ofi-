# PaymentInstrumentPublicConfig.xml

**Path**: `config\serialization\Payment\PaymentInstrumentPublicConfig.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PaymentInstrumentPublicConfig` view class. It specifies that both the `paymentInstrument` and `config` attributes should be included when serializing data for admin and shop contexts (via `admin:instrument:read` and `shop:instrument:read` groups), enabling controlled exposure of payment instrument configuration data to different user roles.

