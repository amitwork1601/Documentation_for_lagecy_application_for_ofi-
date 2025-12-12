# SubscriptionStopReasonTranslation.xml

**Path**: `config\serialization\Subscription\SubscriptionStopReasonTranslation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `SubscriptionStopReasonTranslation` entity, which handles translated versions of subscription cancellation reasons. It specifies that the `name` and `locale` attributes should be included when serializing this entity for admin-level subscription and subscription stop reason operations (read, create, and update contexts). This enables the API to return localized subscription cancellation reason text in different languages based on the locale.

