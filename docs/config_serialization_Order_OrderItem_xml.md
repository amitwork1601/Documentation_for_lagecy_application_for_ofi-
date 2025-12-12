# OrderItem.xml

**Path**: `config\serialization\Order\OrderItem.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `OrderItem` entity, controlling which attributes are exposed in different API contexts. It specifies visibility rules for order item properties (id, code, order, variant) across various use cases including admin interfaces, shop frontend, cart operations, subscription management, and external webmethod integrations. The configuration enables fine-grained control over what order item data is serialized/deserialized based on the requesting context (admin vs. shop, full vs. light reads, etc.).

