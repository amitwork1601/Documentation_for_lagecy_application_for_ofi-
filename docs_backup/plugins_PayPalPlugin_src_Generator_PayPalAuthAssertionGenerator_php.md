# PayPalAuthAssertionGenerator.php

**Path**: `plugins\PayPalPlugin\src\Generator\PayPalAuthAssertionGenerator.php`

## Summary
The `PayPalAuthAssertionGenerator` class generates PayPal authentication assertion tokens required for API calls in multi-party payment scenarios. It extracts the client ID and merchant ID from a payment method's gateway configuration and encodes them into a JWT-like structure (header.payload.signature format) with an "alg:none" algorithm, which PayPal uses to identify the merchant in partner-facilitated transactions.

## Classes
- `PayPalAuthAssertionGenerator`

## Function Details

### `generate`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

