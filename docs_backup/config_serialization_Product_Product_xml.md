# Product.xml

**Path**: `config\serialization\Product\Product.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `App\Entity\Product\Product` entity, controlling which product attributes (id, name, code) are exposed in different API contexts. It specifies granular access rules across multiple domains including admin panels, shop interfaces, cart operations, orders, subscriptions, upsells, and webmethod integrations, ensuring that product data is appropriately serialized based on the consumer's context and permissions.

