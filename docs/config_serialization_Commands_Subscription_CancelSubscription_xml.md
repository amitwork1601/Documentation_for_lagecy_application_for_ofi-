# CancelSubscription.xml

**Path**: `config\serialization\Commands\Subscription\CancelSubscription.xml`

## Summary
This XML configuration file defines serialization rules for the `CancelSubscription` command in a subscription management system. It specifies that the `subscriptionStopReason` attribute should be included when serializing/deserializing this command within the `admin:subscription:cancel` serialization group, allowing administrators to capture the reason when canceling a user's subscription.

