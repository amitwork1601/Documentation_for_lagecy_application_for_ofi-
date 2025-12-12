# RefundReferenceNumberProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\RefundReferenceNumberProviderSpec.php`

## Summary
This is a PHPSpec test specification for a `RefundReferenceNumberProvider` class in the Sylius PayPal plugin. It verifies that the provider generates unique refund reference numbers by combining a payment's ID with the current date in the format `{paymentId}-{day}-{month}-{year}`, which is used to track and identify PayPal refund transactions within the e-commerce system.

## Classes
- `RefundReferenceNumberProviderSpec`

## Function Details

### `it_implements_refund_reference_number_provider_interface`


### `it_provides_reference_number_based_on_payment_id_and_current_date`

- **Parameters**: `PaymentInterface $payment`

