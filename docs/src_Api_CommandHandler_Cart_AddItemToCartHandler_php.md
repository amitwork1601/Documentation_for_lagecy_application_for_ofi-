# AddItemToCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\AddItemToCartHandler.php`

## Summary
This command handler manages the addition of items to a shopping cart in an e-commerce system. It retrieves a product variant and cart by their identifiers, creates a new cart item with the specified variant and quantity, applies order locking to prevent concurrent modifications, and uses Sylius framework components to modify the order with the new item. The handler also integrates with an upselling service to potentially suggest related products when items are added to the cart.

## Classes
- `AddItemToCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddItemToCart $addItemToCart`

