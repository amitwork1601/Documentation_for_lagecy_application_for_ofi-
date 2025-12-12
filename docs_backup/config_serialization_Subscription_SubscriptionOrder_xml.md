# SubscriptionOrder.xml

**Path**: `config\serialization\Subscription\SubscriptionOrder.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `SubscriptionOrder` entity, controlling which attributes (id, number, orderDate, tokenValue) are exposed in different API contexts. It manages data visibility across multiple access levels including admin interfaces, shop/customer views, and webmethod integrations, ensuring appropriate data filtering based on the consumer's permissions and use case.

