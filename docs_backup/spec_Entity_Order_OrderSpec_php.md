# OrderSpec.php

**Path**: `spec\Entity\Order\OrderSpec.php`

## Summary
This is a PHPSpec specification file that tests the `Order` entity class, which represents customer orders in an e-commerce system. The spec verifies that orders properly implement promotion subject and order interfaces, initialize with empty collections for items and adjustments, have a creation timestamp, and default null values for checkout completion date, order number, notes, and payment method. It ensures the Order entity's initial state and basic structure are correctly configured for handling shopping cart/order management functionality.

## Classes
- `OrderSpec`

## Function Details

### `it_is_initializable`


### `it_has_empty_array_collection_items`


### `it_has_empty_array_collection_adjustments`


### `it_has_date_time_created_at`


### `it_has_null_checkout_completed_at`


### `it_has_null_number`


### `it_has_null_notes`


### `it_has_null_payment_method_by_default`


