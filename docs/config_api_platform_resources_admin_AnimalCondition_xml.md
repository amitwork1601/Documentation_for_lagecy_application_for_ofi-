# AnimalCondition.xml

**Path**: `config\api_platform\resources\admin\AnimalCondition.xml`

## Summary
This API Platform resource configuration file defines REST API endpoints for managing AnimalCondition entities in an admin context. It configures two operations: a GET collection endpoint that retrieves all animal conditions (unpaginated, ordered by priority descending, filterable by translatable name with locale) and a POST endpoint for creating new animal conditions using a custom persist processor. Both operations use the `admin:animal_condition:read` serialization group for response formatting.

