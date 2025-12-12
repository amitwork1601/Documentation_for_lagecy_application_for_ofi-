# Promotion.xml

**Path**: `config\serialization\Promotion\Promotion.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `App\Entity\Promotion\Promotion` entity, controlling which attributes are exposed in different API contexts. It specifies visibility rules for promotion attributes (id, name, label, code, description, priority, exclusive) across various serialization groups including admin views, shop views, and webmethod API endpoints for both promotion and order operations. This configuration enables fine-grained control over which promotion data is serialized when the entity is used in different parts of the application's API layer.

