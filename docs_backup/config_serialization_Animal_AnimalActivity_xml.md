# AnimalActivity.xml

**Path**: `config\serialization\Animal\AnimalActivity.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `AnimalActivity` entity. It controls which attributes (id, type, code, createdAt, updatedAt, translations, name, priority) are exposed in different contexts such as admin operations (read/create/update), shop frontend views, and web service methods. The configuration enables fine-grained control over API responses by restricting which fields are included based on user roles and operation types.

