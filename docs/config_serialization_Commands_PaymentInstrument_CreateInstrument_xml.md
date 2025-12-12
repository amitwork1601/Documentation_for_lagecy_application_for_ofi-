# CreateInstrument.xml

**Path**: `config\serialization\Commands\PaymentInstrument\CreateInstrument.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `CreateInstrument` command in the payment instrument domain. It specifies that the `customer` attribute should be included when serializing or deserializing data for the `admin:instrument:create` group, which controls what data is exposed when administrators create new payment instruments through the API.

