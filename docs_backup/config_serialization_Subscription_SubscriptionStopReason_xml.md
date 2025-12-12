# SubscriptionStopReason.xml

**Path**: `config\serialization\Subscription\SubscriptionStopReason.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `SubscriptionStopReason` entity, which represents reasons why a subscription was stopped or cancelled. It controls how the entity's attributes (id, deleted status, priority, name, and translations) are exposed across different API contexts including admin interfaces, shop-facing APIs, and web service methods. The configuration ensures appropriate data visibility based on user roles and operation types (read, create, update) for managing subscription cancellation reasons.

