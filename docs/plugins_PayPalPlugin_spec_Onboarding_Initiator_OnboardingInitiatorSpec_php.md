# OnboardingInitiatorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Onboarding\Initiator\OnboardingInitiatorSpec.php`

## Summary
This is a PhpSpec test specification for a PayPal onboarding initiator component in a Sylius e-commerce plugin. It tests the logic that determines whether a PayPal payment method requires onboarding (supports methods without a client ID configured) and validates proper initialization by throwing exceptions when payment methods lack gateway configuration. The spec ensures the initiator correctly identifies when merchants need to complete PayPal account setup before processing payments.

## Classes
- `OnboardingInitiatorSpec`

## Function Details

### `let`

- **Parameters**: `UrlGeneratorInterface $urlGenerator, Security $security`

### `it_implements_onboarding_initiator_interface`


