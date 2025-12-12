# TaxonTranslation.xml

**Path**: `config\serialization\Taxon\TaxonTranslation.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `TaxonTranslation` entity, which handles multilingual taxonomy category translations in a Sylius e-commerce application. It specifies which attributes (id, name, locale, description, slug) should be included when serializing taxon translations for different contexts, such as admin operations (show, create, update) and shop front-end display. The configuration ensures proper data exposure control across different API endpoints and user roles by organizing attributes into specific serialization groups.

