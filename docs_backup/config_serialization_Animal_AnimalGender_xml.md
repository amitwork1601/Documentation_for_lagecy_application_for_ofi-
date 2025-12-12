# AnimalGender.xml

**Path**: `config\serialization\Animal\AnimalGender.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AnimalGender` entity, controlling which attributes are exposed in different API contexts. It establishes four main access contexts: shop-level animal gender/code reading, administrative CRUD operations, and customer web method access, with attributes like `id`, `name`, `priority`, and `translations` being selectively exposed based on the operation being performed. The configuration supports multi-language functionality through translations and includes audit fields (createdAt/updatedAt) restricted to administrative access only.

