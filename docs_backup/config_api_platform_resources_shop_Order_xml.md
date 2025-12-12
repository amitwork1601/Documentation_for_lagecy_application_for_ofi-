# Order.xml

**Path**: `config\api_platform\resources\shop\Order.xml`

## Summary
This XML configuration file defines API Platform resource operations for managing shopping cart/order functionality in a Sylius e-commerce application. It configures REST API endpoints for the shop's order operations, including creating orders (POST `/shop/orders`), adding items to cart (PATCH `/shop/orders/{tokenValue}/items`), with specific serialization groups for controlling data exposure and command-based input handling through Symfony Messenger. The configuration establishes the API contract for customer-facing shopping cart interactions, mapping HTTP operations to domain commands like `PickupCart` and `AddItemToCart`.

