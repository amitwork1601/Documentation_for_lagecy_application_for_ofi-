# OnboardingInitiator.php

**Path**: `plugins\PayPalPlugin\src\Onboarding\Initiator\OnboardingInitiator.php`

## Summary
The `OnboardingInitiator` class manages the PayPal merchant onboarding process by generating a partner referral URL that redirects administrators to PayPal's facilitator platform. It constructs a URL with the admin user's email and a return callback to complete the payment method setup, enabling merchants to connect their PayPal accounts to the Sylius e-commerce platform. The class validates that the payment method uses the PayPal gateway configuration before initiating the onboarding flow.

## Classes
- `OnboardingInitiator`

## Function Details

### `__construct`

- **Parameters**: `UrlGeneratorInterface $urlGenerator, Security $security, string $facilitatorUrl`

### `initiate`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

