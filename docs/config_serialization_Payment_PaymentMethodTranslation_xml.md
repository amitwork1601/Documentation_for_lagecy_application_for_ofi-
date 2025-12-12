# PaymentMethodTranslation.xml

**Path**: `config\serialization\Payment\PaymentMethodTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PaymentMethodTranslation` entity, which handles translated content (name, description, and instructions) for payment methods in different languages. It specifies which attributes should be included when serializing this entity across various contexts, including admin subscription management, payment method CRUD operations, shopping cart display, and order management in both admin and shop interfaces. The configuration enables controlled data exposure of payment method translations based on the specific use case or API endpoint being accessed.

