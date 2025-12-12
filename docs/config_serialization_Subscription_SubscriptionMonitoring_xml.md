# SubscriptionMonitoring.xml

**Path**: `config\serialization\Subscription\SubscriptionMonitoring.xml`

## Summary
This Symfony serialization configuration file defines how the `SubscriptionMonitoring` entity should be serialized/deserialized for API operations. It specifies that administrators can read all attributes (id, calendarDate, max, createdAt, updatedAt) through the `admin:subscription_monitoring:read` serialization group, while only the `max` attribute can be updated through the `admin:subscription_monitoring:update` group. This configuration controls data exposure and modification permissions for subscription monitoring functionality, likely used to track and manage subscription limits or thresholds over time.

