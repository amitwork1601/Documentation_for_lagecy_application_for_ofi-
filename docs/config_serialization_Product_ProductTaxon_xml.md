# ProductTaxon.xml

**Path**: `config\serialization\Product\ProductTaxon.xml`

## Summary
This Symfony serializer configuration file defines how the `ProductTaxon` model should be serialized across different API contexts in a Sylius e-commerce application. It specifies which attributes (id, taxon, position, name) should be included when serializing ProductTaxon objects for various admin and shop operations, such as viewing, creating, or updating products and their taxonomic categorizations. The configuration ensures appropriate data exposure based on whether the context is admin or shop-facing, and whether it's for reading or writing operations.

