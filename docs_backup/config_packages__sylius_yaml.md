# _sylius.yaml

**Path**: `config\packages\_sylius.yaml`

## Summary
This YAML configuration file serves as the main Sylius e-commerce framework configuration, importing essential bundle configurations and customizing core Sylius resources. It enables the Sylius API, configures the state machine adapter, and maps Sylius domain entities (addresses, products, channels, taxonomies, etc.) to custom application-specific entity classes in the `App\Entity` namespace. The file essentially bridges the standard Sylius framework with application-specific implementations while setting operational parameters like order item quantity limits and token length.

