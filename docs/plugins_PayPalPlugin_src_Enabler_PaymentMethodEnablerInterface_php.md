# PaymentMethodEnablerInterface.php

**Path**: `plugins\PayPalPlugin\src\Enabler\PaymentMethodEnablerInterface.php`

## Summary
This interface defines a contract for enabling PayPal payment methods within the Sylius e-commerce platform. It provides a single method to activate a payment method, with built-in exception handling for cases where the enablement process fails, likely due to configuration issues or API connectivity problems with PayPal.

## Function Details

### `enable`

- **Parameters**: `PaymentMethodInterface $paymentMethod`
- **Description**: @throws PaymentMethodCouldNotBeEnabledException
/

