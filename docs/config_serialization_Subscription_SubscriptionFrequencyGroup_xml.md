# SubscriptionFrequencyGroup.xml

**Path**: `config\serialization\Subscription\SubscriptionFrequencyGroup.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `SubscriptionFrequencyGroup` entity, controlling which attributes are exposed during API operations. It configures seven attributes (id, label, minRange, maxRange, prevDayMargin, postDayMargin, and dailyCap) with specific serialization groups for admin-level read, create, and update operations on subscription frequency groups, which appear to manage time-based subscription delivery windows with configurable ranges and daily capacity limits.

