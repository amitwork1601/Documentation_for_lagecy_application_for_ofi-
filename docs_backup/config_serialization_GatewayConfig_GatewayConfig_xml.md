# GatewayConfig.xml

**Path**: `config\serialization\GatewayConfig\GatewayConfig.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `GatewayConfig` entity, which manages payment and shipping gateway configurations in a Sylius e-commerce application. It specifies which attributes (`id`, `factoryName`, `gatewayName`, `config`) should be included when serializing gateway configuration data for different contexts, including GraphQL API reads and various admin operations (show, create, update) for both payment methods and shipping methods.

