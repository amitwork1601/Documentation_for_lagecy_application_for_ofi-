# AnimalType.xml

**Path**: `config\serialization\Animal\AnimalType.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalType` entity, controlling which attributes are exposed in different API contexts. It specifies visibility rules for attributes like `id`, `name`, `translations`, and `priority` across various use cases including shop operations (animal types, customer animals), admin operations (CRUD), and web method integrations. The configuration enables fine-grained control over what animal type data is serialized when accessed through different API endpoints or user roles.

