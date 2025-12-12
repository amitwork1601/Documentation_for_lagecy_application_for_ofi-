# AnimalBreed.xml

**Path**: `config\api_platform\resources\admin\AnimalBreed.xml`

## Summary
This API Platform configuration file defines the admin-level REST API operations for the AnimalBreed resource. It configures two endpoints: a GET collection operation that retrieves all animal breeds (with pagination disabled, ordered by priority descending, and filtered by translatable names), and a POST operation for creating new animal breeds with custom persistence logic. The configuration specifies serialization groups for controlling data exposure and uses Sylius-based naming conventions for route generation.

