# AnimalDeletedReason.xml

**Path**: `config\api_platform\resources\shop\AnimalDeletedReason.xml`

## Summary
This API Platform configuration file defines REST API endpoints for the `AnimalDeletedReason` resource in a shop context. It exposes two read-only operations: a collection endpoint to retrieve all deletion reasons (sorted by priority descending, without pagination) and a single item endpoint to fetch individual reasons, both using the `shop:animal_deleted_reason:read` serialization group for controlling data exposure.

