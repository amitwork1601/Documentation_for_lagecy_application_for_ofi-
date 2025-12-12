# Subscription.xml

**Path**: `config\api_platform\resources\admin\Subscription.xml`

## Summary
This API Platform configuration file defines RESTful API endpoints for managing Subscription resources in an admin context. It specifies three operations: retrieving a collection of subscriptions (ordered by ID descending), fetching a single subscription by code, and updating a subscription via PUT request. All operations use the `admin:subscription:read` serialization group and are prefixed with `/admin/subscriptions` routing.

