# DummyRefundPaymentApi.php

**Path**: `plugins\PayPalPlugin\tests\Service\DummyRefundPaymentApi.php`

## Summary
This is a test double (dummy implementation) of the PayPal refund payment API interface used for testing the Sylius PayPal plugin without making actual API calls. It implements the `RefundPaymentApiInterface` by returning a mock successful refund response with a "COMPLETED" status instead of communicating with the real PayPal API, allowing for isolated unit testing of refund functionality.

## Classes
- `DummyRefundPaymentApi`

