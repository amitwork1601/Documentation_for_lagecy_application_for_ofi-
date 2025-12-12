# CompletePayment.xml

**Path**: `config\serialization\Commands\Payment\CompletePayment.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `CompletePayment` command class. It specifies that the `details` attribute should be included when serializing this payment completion command in the `admin:payment:complete` context, allowing controlled exposure of payment details to admin users during the payment completion process.

