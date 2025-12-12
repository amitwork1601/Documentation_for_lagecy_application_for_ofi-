# ChangeItemQuantityInCart.php

**Path**: `src\Api\Command\Cart\ChangeItemQuantityInCart.php`

## Summary
This class represents a command for modifying the quantity of an item in a shopping cart within a Sylius-based e-commerce system. It encapsulates the necessary data to identify a specific cart (via order token), locate an item within that cart (via order item ID), and update its quantity, with additional support for subscription-based products through the optional subscription interval property. The class implements `ItemQuantityEligibilityInterface` and uses attributes to ensure proper validation of the order token and item ID values.

## Classes
- `ChangeItemQuantityInCart`

