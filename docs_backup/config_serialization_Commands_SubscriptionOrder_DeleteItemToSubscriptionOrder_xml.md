# DeleteItemToSubscriptionOrder.xml

**Path**: `config\serialization\Commands\SubscriptionOrder\DeleteItemToSubscriptionOrder.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `DeleteItemToSubscriptionOrder` command in the subscription order management domain. It specifies that the `orderItem` and `tokenValue` attributes should be included when serializing/deserializing this command within the `admin:subscription_order:delete_item` serialization group, enabling administrators to remove items from subscription orders with proper token-based authorization.

