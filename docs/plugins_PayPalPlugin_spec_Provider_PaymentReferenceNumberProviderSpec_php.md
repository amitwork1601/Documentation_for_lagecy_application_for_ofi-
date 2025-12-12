# PaymentReferenceNumberProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PaymentReferenceNumberProviderSpec.php`

## Summary
This is a PhpSpec test specification for a PayPalPlugin component that generates unique payment reference numbers for PayPal transactions. It tests that the `PaymentReferenceNumberProvider` creates reference numbers by combining a payment's ID with its creation date in the format "ID-DD-MM-YYYY", which is likely used for tracking and reconciling PayPal payments within the Sylius e-commerce system.

## Classes
- `PaymentReferenceNumberProviderSpec`

## Function Details

### `it_implements_payment_reference_number_provider_interface`


### `it_provides_reference_number_based_on_payment_id_and_creation_date`

- **Parameters**: `PaymentInterface $payment`

