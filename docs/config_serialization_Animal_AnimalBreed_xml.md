# AnimalBreed.xml

**Path**: `config\serialization\Animal\AnimalBreed.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalBreed` entity, controlling which attributes are exposed in different API contexts. It maps attributes like `id`, `name`, `code`, `type`, and `adultAge` to specific serialization groups for shop, admin, and webmethod operations, determining read/create/update permissions across different parts of the application. This configuration enables fine-grained control over what animal breed data is accessible to customers, administrators, and external web services.

