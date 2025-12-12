# PaymentProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\PaymentProviderInterface.php`

## Summary
This interface defines a contract for retrieving Sylius payment entities based on PayPal order IDs, serving as a bridge between PayPal's payment system and Sylius's core payment management. It provides a single method to look up payments using PayPal's external order identifiers, throwing a `PaymentNotFoundException` when the payment cannot be found. This is essential for the PayPal plugin to reconcile PayPal transactions with corresponding payments in the Sylius e-commerce platform.

## Function Details

### `getByPayPalOrderId`

- **Parameters**: `string $orderId`
- **Description**: @throws PaymentNotFoundException
/

