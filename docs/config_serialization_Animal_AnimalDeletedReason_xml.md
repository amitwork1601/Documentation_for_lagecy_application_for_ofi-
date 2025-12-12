# AnimalDeletedReason.xml

**Path**: `config\serialization\Animal\AnimalDeletedReason.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalDeletedReason` entity, which represents reasons why animals are deleted/removed from the system. It controls which attributes (id, code, defaultReason, name, timestamps, translations) are exposed in different API contexts, segmented by user roles (shop, admin, webmethod) and operations (read, create, update), enabling fine-grained access control for animal deletion reason data across different parts of the application.

