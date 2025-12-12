# ProductOption.xml

**Path**: `config\serialization\Product\ProductOption.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `ProductOption` entity in a Sylius e-commerce application. It specifies which attributes (id, code, name, createdAt, updatedAt, values, translations) should be included when serializing product options for different contexts, such as admin product/variant views, product option CRUD operations, and shop frontend displays. The configuration enables context-aware API responses by controlling which ProductOption fields are exposed based on the requesting user's role and the operation being performed.

