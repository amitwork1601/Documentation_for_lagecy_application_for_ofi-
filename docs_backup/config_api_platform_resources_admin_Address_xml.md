# Address.xml

**Path**: `config\api_platform\resources\admin\Address.xml`

## Summary
This API Platform resource configuration file defines admin-level API endpoints for managing Address entities in a Sylius e-commerce application. It configures two REST operations: a DELETE endpoint at `/admin/addresses/{id}` using a custom RemoveProcessor, and a POST endpoint at `/admin/addresses` using a custom PersistProcessor, each with specific validation and serialization groups for creating and deleting address records through the admin interface.

