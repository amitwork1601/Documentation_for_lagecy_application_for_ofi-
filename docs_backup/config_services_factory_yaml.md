# factory.yaml

**Path**: `config\services\factory.yaml`

## Summary
This configuration file defines factory services for the pickup point system using Symfony's service decoration pattern. It sets up two decorated factories: `PickupPointFactory` which creates pickup points using an address provider and random generator, and `PickupAddressFactory` which creates pickup addresses. The decorators extend the base factory functionality while injecting additional dependencies needed for pickup point address management in what appears to be a Sylius-based e-commerce application.

