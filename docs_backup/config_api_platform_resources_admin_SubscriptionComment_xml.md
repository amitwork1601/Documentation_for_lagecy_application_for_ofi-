# SubscriptionComment.xml

**Path**: `config\api_platform\resources\admin\SubscriptionComment.xml`

## Summary
This API Platform configuration file defines a REST API endpoint for retrieving subscription comments in an admin context. It configures a GET collection operation at `/admin/subscriptions/{code}/comments` that returns comments associated with a specific subscription, using the `admin:subscription:read:light` normalization group to control the serialized output format.

