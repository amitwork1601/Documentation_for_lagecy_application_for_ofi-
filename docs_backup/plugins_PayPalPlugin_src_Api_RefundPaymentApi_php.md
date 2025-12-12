# RefundPaymentApi.php

**Path**: `plugins\PayPalPlugin\src\Api\RefundPaymentApi.php`

## Summary
This class implements the PayPal API interface for processing payment refunds in the Sylius PayPal plugin. It wraps the PayPal REST API v2 capture refund endpoint, sending refund requests with payment details (amount, currency, invoice number) and authentication credentials to reverse completed payment transactions.

## Classes
- `RefundPaymentApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

