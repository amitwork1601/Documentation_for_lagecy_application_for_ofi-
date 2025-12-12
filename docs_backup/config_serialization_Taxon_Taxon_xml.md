# Taxon.xml

**Path**: `config\serialization\Taxon\Taxon.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `Taxon` entity in a taxonomy system, likely for an e-commerce application (Sylius). It specifies which entity attributes (id, code, name, slug, description, translations, children, parent, position) should be included when serializing taxon data for different contexts: admin operations (show, create, update) and shop display (show). The configuration enables controlled API responses by grouping related fields based on user roles and operations.

