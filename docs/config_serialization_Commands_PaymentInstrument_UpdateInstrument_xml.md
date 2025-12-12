# UpdateInstrument.xml

**Path**: `config\serialization\Commands\PaymentInstrument\UpdateInstrument.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `UpdateInstrument` command in a payment instrument management system. It specifies that three attributes (`paymentData`, `currentUrl`, and `subscription`) should be serialized for two user roles: administrators and shop users when updating payment instruments. The configuration ensures proper data transformation and access control during payment instrument update operations across different parts of the application.

