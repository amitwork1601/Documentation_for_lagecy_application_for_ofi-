# Address.xml

**Path**: `config\serialization\Address\Address.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `Address` entity in an e-commerce/subscription-based application. It controls which address fields (id, customer, firstName, etc.) are exposed in different API contexts, such as admin panels, shop frontend, cart operations, orders, subscriptions, and pickup point searches. The configuration enables fine-grained control over data visibility across multiple user roles (admin, shop customer) and external integrations (webmethod), ensuring appropriate data access for different parts of the Sylius-based commerce platform.

