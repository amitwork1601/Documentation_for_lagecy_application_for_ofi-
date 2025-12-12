# AnimalKibbleBrand.xml

**Path**: `config\serialization\Animal\AnimalKibbleBrand.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalKibbleBrand` entity, controlling which attributes (id, name, code, range, premium, priority) are exposed in different API contexts. It manages access permissions across multiple contexts including shop-facing kibble brand listings, animal code lookups, admin CRUD operations, and webmethod customer integrations. The configuration supports role-based data visibility, ensuring that sensitive or administrative fields are only serialized when accessed through appropriate authorization groups.

