# Subscription.xml

**Path**: `config\api_platform\resources\shop\Subscription.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing Subscriptions in the shop context of what appears to be a Sylius e-commerce application. It configures two operations: a GET collection endpoint (`/subscriptions`) that retrieves all subscriptions ordered by ID in descending order, and a GET item endpoint (`/subscriptions/{code}`) that retrieves individual subscriptions by their code. Both operations use custom state providers and normalize responses using the `shop:subscription:read` serialization group for controlling exposed data fields.

