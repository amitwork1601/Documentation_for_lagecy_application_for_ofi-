# CreateSubscriptionOrderFromSubscription.xml

**Path**: `config\serialization\Commands\SubscriptionOrder\CreateSubscriptionOrderFromSubscription.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization rules for the `CreateSubscriptionOrderFromSubscription` command class. It specifies that the `subscriptionCode` attribute should be included when serializing this command object for the `admin:subscription_order:create` serialization group, which is used when creating subscription orders from existing subscriptions in the admin context.

