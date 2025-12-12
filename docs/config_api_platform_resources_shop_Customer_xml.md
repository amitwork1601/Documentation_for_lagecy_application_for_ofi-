# Customer.xml

**Path**: `config\api_platform\resources\shop\Customer.xml`

## Summary
This API Platform configuration file defines shop-facing REST API endpoints for customer management in a Sylius e-commerce application. It configures two operations: a POST endpoint (`/shop/customers`) for customer registration that uses the `RegisterShopUser` command with messenger integration, and a PUT endpoint (`/shop/customers/{id}`) for updating customer information. The configuration specifies serialization groups, validation contexts, and input/output handling for each operation to control data exposure and processing in the shop context.

