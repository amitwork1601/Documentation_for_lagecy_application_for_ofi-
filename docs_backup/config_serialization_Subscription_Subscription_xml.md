# Subscription.xml

**Path**: `config\serialization\Subscription\Subscription.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `Subscription` entity, controlling which attributes are exposed in different API contexts. It maps subscription properties (id, code, subscriptionInterval, periodicity, frequency, subscriptionState) to specific serialization groups like admin, shop, and webmethod contexts with varying access levels (read, create, light). The configuration enables fine-grained control over what subscription data is serialized based on the user role and operation being performed (e.g., admin reads get full details while shop reads may have limited fields).

