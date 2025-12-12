# AnimalBreed.xml

**Path**: `config\api_platform\resources\shop\AnimalBreed.xml`

## Summary
This API Platform resource configuration defines REST API endpoints for accessing AnimalBreed entities in a shop context within a Sylius-based e-commerce application. It exposes two read-only operations: a collection endpoint (GET all breeds) with pagination disabled and locale-based filtering, and a single item endpoint (GET one breed), both using the `shop:animal_breed:read` serialization group for controlling which fields are exposed to shop customers.

