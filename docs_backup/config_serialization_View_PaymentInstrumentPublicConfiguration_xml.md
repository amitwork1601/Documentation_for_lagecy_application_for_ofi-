# PaymentInstrumentPublicConfiguration.xml

**Path**: `config\serialization\View\PaymentInstrumentPublicConfiguration.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `PaymentInstrumentPublicConfig` view class. It specifies that both the `paymentInstrument` and `config` attributes should be included when serializing objects for two serialization groups: `admin:instrument:update` and `shop:instrument:update`, enabling controlled exposure of payment instrument configuration data to different user contexts (admin and shop interfaces).

