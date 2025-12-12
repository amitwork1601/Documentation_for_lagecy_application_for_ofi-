# RefundPaymentApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\RefundPaymentApiSpec.php`

## Summary
This is a PHPSpec specification file that tests the `RefundPaymentApi` class, which handles refunding PayPal payment captures through the PayPal API. The spec verifies that the API correctly implements the `RefundPaymentApiInterface` and properly formats refund requests by calling the PayPal v2 captures refund endpoint with the payment ID, authentication token, amount, currency, and invoice details.

## Classes
- `RefundPaymentApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $client`

### `it_implements_refund_order_api_interface`


### `it_refunds_pay_pal_payment_with_given_id`

- **Parameters**: `PayPalClientInterface $client`

