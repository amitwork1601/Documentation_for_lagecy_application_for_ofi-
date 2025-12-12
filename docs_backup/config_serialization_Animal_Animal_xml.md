# Animal.xml

**Path**: `config\serialization\Animal\Animal.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `Animal` entity, controlling which attributes are exposed in different API contexts. It maps animal properties (id, customer, name, code, type) to specific access contexts like shop operations, admin functions, and web methods, enabling role-based and context-specific data visibility. This configuration ensures that different user types (customers, admins) and operations (read, create, update) only access the animal data they're authorized to see.

