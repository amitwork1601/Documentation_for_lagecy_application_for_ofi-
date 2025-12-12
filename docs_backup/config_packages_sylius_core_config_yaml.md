# config.yaml

**Path**: `config\packages\sylius\core\config.yaml`

## Summary
This YAML configuration file serves as the central configuration hub for Sylius Core e-commerce functionality, importing configurations from multiple Sylius bundles (Order, Payment, Product, Promotion, Shipping, User) and setting up their integration. It configures essential infrastructure including Doctrine ORM with custom DQL date/time functions, Flysystem for local image storage in the web/media directory, and Payum payment gateway storage mappings for order and payment entities. The file essentially bootstraps a complete e-commerce platform by wiring together all core business domain components and their persistence/storage requirements.

