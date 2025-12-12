# UpdateIntervalShippingDateSubscription.xml

**Path**: `config\serialization\Commands\Subscription\UpdateIntervalShippingDateSubscription.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization rules for the `UpdateIntervalShippingDateSubscription` command. It specifies that the `interval` and `shippingDate` attributes should be included when serializing/deserializing this command in two contexts: admin subscription interval updates and shop subscription interval updates, enabling controlled data exposure for subscription management operations in both admin and customer-facing interfaces.

