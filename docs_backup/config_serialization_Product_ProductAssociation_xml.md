# ProductAssociation.xml

**Path**: `config\serialization\Product\ProductAssociation.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `ProductAssociation` model in a Sylius e-commerce application. It controls which attributes (id, type, associatedProducts, owner) are exposed when serializing product associations for different contexts, specifically distinguishing between shop frontend display, admin creation, admin updates, and admin viewing operations. This configuration enables fine-grained control over what product relationship data is included in API responses or data exports based on the user's role and the operation being performed.

