# SubscriptionOrder.xml

**Path**: `config\api_platform\properties\SubscriptionOrder.xml`

## Summary
This is an API Platform configuration file that defines property metadata for a SubscriptionOrder resource. It configures three properties (id, tokenValue, and number) where tokenValue serves as the primary identifier for the resource, while all three properties are marked as read-only (not writable) through the API. This configuration controls how the SubscriptionOrder entity is exposed and accessed via the API Platform, specifically ensuring that these fields cannot be modified through API requests while tokenValue is used for resource identification instead of the standard id field.

