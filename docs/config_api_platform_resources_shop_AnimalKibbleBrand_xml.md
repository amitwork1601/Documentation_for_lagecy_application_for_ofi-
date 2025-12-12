# AnimalKibbleBrand.xml

**Path**: `config\api_platform\resources\shop\AnimalKibbleBrand.xml`

## Summary
This API Platform configuration file defines REST API endpoints for accessing animal kibble brand data in a Sylius-based shop application. It exposes two read-only operations: a collection endpoint that retrieves all kibble brands (sorted by priority in descending order, without pagination) and a single item endpoint for retrieving individual brand details. Both operations use the `shop:kibble_brands:read` serialization group to control which data fields are exposed to shop customers.

