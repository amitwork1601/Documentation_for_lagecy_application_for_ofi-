# BasicOnboardingProcessor.php

**Path**: `plugins\PayPalPlugin\src\Onboarding\Processor\BasicOnboardingProcessor.php`

## Summary
The `BasicOnboardingProcessor` class handles the PayPal merchant onboarding process by validating partner referrals and configuring payment method credentials. It retrieves merchant information from PayPal's partner referrals API using an onboarding ID, then registers webhooks for the seller to enable payment event notifications. This processor is part of the Sylius PayPal plugin's merchant account setup workflow.

## Classes
- `BasicOnboardingProcessor`

## Function Details

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod, Request $request`

