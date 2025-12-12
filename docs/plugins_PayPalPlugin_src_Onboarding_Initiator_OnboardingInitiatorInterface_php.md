# OnboardingInitiatorInterface.php

**Path**: `plugins\PayPalPlugin\src\Onboarding\Initiator\OnboardingInitiatorInterface.php`

## Summary
This interface defines a contract for initiating the PayPal onboarding process for payment methods in a Sylius e-commerce application. It provides two core methods: `initiate()` which generates and returns a PayPal redirection URL to begin the merchant onboarding flow, and `supports()` which determines if a given payment method is eligible for PayPal onboarding.

## Function Details

### `initiate`

- **Parameters**: `PaymentMethodInterface $paymentMethod`
- **Description**: @return string Redirection URL to PayPal
/

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

