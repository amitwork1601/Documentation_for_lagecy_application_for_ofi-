# OrderDetailsApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\OrderDetailsApiSpec.php`

## Summary
This is a PHPSpec specification file that tests the `OrderDetailsApi` class in the Sylius PayPal plugin. It verifies that the API correctly retrieves order details from PayPal by delegating to a PayPal client to make GET requests to PayPal's checkout orders endpoint. The spec ensures the class implements the `OrderDetailsApiInterface` and properly formats requests with authentication tokens and order IDs to fetch order information like totals.

## Classes
- `OrderDetailsApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $client`

### `it_implements_pay_pal_order_details_provider_interface`


### `it_provides_details_about_pay_pal_order`

- **Parameters**: `PayPalClientInterface $client`

