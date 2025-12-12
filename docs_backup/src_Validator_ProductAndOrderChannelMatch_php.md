# ProductAndOrderChannelMatch.php

**Path**: `src\Validator\ProductAndOrderChannelMatch.php`

## Summary
This is a Symfony validation constraint that ensures products being added to an order belong to the same channel as the order itself. It's a class-level constraint (validates entire objects rather than individual properties) designed to prevent cross-channel ordering issues in a multi-channel e-commerce system. The constraint works with a corresponding validator (not shown) that would check the channel match and display the 'app.order.product.wrong_channel' error message when validation fails.

## Classes
- `ProductAndOrderChannelMatch`

## Function Details

### `getTargets`


