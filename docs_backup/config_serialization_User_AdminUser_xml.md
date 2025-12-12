# AdminUser.xml

**Path**: `config\serialization\User\AdminUser.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `AdminUser` model in a Sylius e-commerce application. It specifies which AdminUser attributes (id, email, username, plainPassword, firstName, lastName, enabled) should be included when serializing data for different API operations (show, create, update) and contexts (admin user management, subscription views). The configuration controls data exposure and access permissions by mapping specific fields to serialization groups, ensuring sensitive information like plainPassword is only included in create/update operations while basic profile data appears across multiple admin and subscription-related contexts.

