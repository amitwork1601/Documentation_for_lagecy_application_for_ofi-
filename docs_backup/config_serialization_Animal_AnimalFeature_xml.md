# AnimalFeature.xml

**Path**: `config\serialization\Animal\AnimalFeature.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `AnimalFeature` entity, controlling which attributes are exposed in different API contexts. It establishes visibility rules for animal feature data across multiple access levels: shop/customer-facing endpoints (for reading animal features and codes), admin operations (full CRUD access including translations), and web service integrations. The configuration ensures that sensitive fields like `createdAt`, `updatedAt`, and `translations` are only accessible to admin users, while basic information like `id`, `name`, and `priority` can be viewed by shop customers.

