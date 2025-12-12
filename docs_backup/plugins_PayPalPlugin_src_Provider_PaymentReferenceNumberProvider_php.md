# PaymentReferenceNumberProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PaymentReferenceNumberProvider.php`

## Summary
This class provides a payment reference number generator for PayPal transactions in the Sylius e-commerce framework. It creates a unique reference string by concatenating the payment's ID with its creation date in "d-m-Y" format (e.g., "123-25-12-2023"), which serves as a human-readable identifier for tracking PayPal payments throughout their lifecycle.

## Classes
- `PaymentReferenceNumberProvider`

## Function Details

### `provide`

- **Parameters**: `PaymentInterface $payment`

