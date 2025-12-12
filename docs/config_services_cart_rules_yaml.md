# cart_rules.yaml

**Path**: `config\services\cart_rules.yaml`

## Summary
This Symfony service configuration file defines cart validation rules for an e-commerce order system. It registers multiple rule checker services that validate different cart conditions such as shipment validity, minimum/maximum cart amounts, product category (taxon) quantity limits, and item availability. These services inherit from a common abstract rule base and are tagged for automatic registration in the cart validation system, each with associated form types for rule configuration.

