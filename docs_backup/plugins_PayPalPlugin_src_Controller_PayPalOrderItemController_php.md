# PayPalOrderItemController.php

**Path**: `plugins\PayPalPlugin\src\Controller\PayPalOrderItemController.php`

## Summary
This controller extends the standard Sylius order item functionality to enable direct PayPal checkout from product detail pages. It replicates the standard "add to cart" process (creating order items, handling form validation, and modifying the cart) but is specifically designed to redirect users immediately to PayPal payment after adding an item, bypassing the traditional cart review step. This provides a streamlined "Buy Now with PayPal" workflow for the Sylius e-commerce platform.

## Classes
- `PayPalOrderItemController`

## Function Details

### `createFromProductDetailsAction`

- **Parameters**: `Request $request`
- **Description**: Most of the method's body is copied from the OrderItemController::addAction
The idea is to use the same process as adding to cart and then redirect to PayPal payment from cart page.
/

