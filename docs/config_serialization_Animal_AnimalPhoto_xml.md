# AnimalPhoto.xml

**Path**: `config\serialization\Animal\AnimalPhoto.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalPhoto` entity, controlling which attributes are exposed in different API contexts. The configuration enables selective exposure of animal photo data (id, fileName, hash, fileId, animal reference, and timestamps) across various access levels including shop operations, customer views, admin interfaces, and web service methods. This allows the application to maintain fine-grained control over what animal photo information is serialized and returned based on the user's role and the specific API endpoint being accessed.

