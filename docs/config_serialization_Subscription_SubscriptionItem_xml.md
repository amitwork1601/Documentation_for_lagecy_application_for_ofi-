# SubscriptionItem.xml

**Path**: `config\serialization\Subscription\SubscriptionItem.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `SubscriptionItem` entity, controlling which attributes are exposed in different API contexts. It manages access permissions for subscription item data across three main contexts: admin operations (read/create/update), shop frontend access, and webmethod integrations. The configuration ensures that sensitive fields like pricing (`unitPrice`, `subtotal`, `total`) and relationships (`subscription`, `productVariant`) are only serialized for authorized user groups based on their role and operation type.

